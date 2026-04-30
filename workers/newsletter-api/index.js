/**
 * Cloudflare Worker — newsletter-api
 *
 * Acts as a server-side proxy between the Jekyll site and Brevo so that the
 * frontend can read actual subscription outcomes (new vs duplicate vs error).
 *
 * Required Worker secrets (set via `wrangler secret put`):
 *   BREVO_API_KEY        — Brevo v3 API key
 *
 * Required Worker variables (wrangler.toml [vars] or dashboard):
 *   BREVO_LIST_ID        — numeric Brevo mailing-list ID (e.g. "3")
 *   ALLOWED_ORIGIN       — exact frontend origin, e.g. "https://amjadshakhshir.github.io"
 *   BREVO_SENDER_EMAIL   — verified sender address in Brevo (welcome email)
 *   BREVO_SENDER_NAME    — display name for the welcome email sender
 *   SITE_URL             — fallback CTA URL inside the welcome email
 *   LEAD_MAGNET_URL      — optional direct PDF link; falls back to SITE_URL when empty
 *
 * Response shape (always JSON):
 *   { status: "subscribed_new" }       → first-time subscriber → unlock (welcome email sent async)
 *   { status: "already_subscribed" }   → contact already on list → unlock (no email)
 *   { status: "invalid_email" }        → malformed email address → no unlock
 *   { status: "rate_limited" }         → Brevo or Worker rate-limit hit → no unlock
 *   { status: "upstream_error" }       → unexpected Brevo failure → no unlock
 *
 * Log events: subscribed_new, already_subscribed, invalid_email, rate_limited,
 *   upstream_error, honeypot, misconfigured, welcome_email_sent, welcome_email_failed.
 */

const BREVO_CONTACTS = 'https://api.brevo.com/v3/contacts';

export default {
  async fetch(request, env, ctx) {
    const reqId = crypto.randomUUID();
    const origin = request.headers.get('Origin') || '';
    const allowedOrigin = env.ALLOWED_ORIGIN || '';

    const corsHeaders = {
      'Access-Control-Allow-Origin': allowedOrigin || origin, // narrow by default
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400',
    };

    /* ── Pre-flight ── */
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    /* ── Method guard ── */
    if (request.method !== 'POST') {
      return jsonResponse({ status: 'upstream_error' }, 405, corsHeaders);
    }

    /* ── Origin guard (when ALLOWED_ORIGIN is configured) ── */
    if (allowedOrigin && origin !== allowedOrigin) {
      return jsonResponse({ status: 'upstream_error' }, 403, corsHeaders);
    }

    let email, locale, source, honeypot;

    try {
      const ct = request.headers.get('Content-Type') || '';
      if (ct.includes('application/json')) {
        const body = await request.json();
        email    = body.email    || '';
        locale   = body.locale   || 'ar';
        source   = body.source   || 'website';
        honeypot = body.honeypot || '';
      } else {
        // fallback: accept form-encoded bodies too
        const fd = await request.formData();
        email    = fd.get('email')    || '';
        locale   = fd.get('locale')   || 'ar';
        source   = fd.get('source')   || 'website';
        honeypot = fd.get('honeypot') || '';
      }
    } catch (_) {
      return jsonResponse({ status: 'upstream_error' }, 400, corsHeaders);
    }

    /* ── Honeypot — silent success to avoid signalling bots ── */
    if (honeypot) {
      log(reqId, 'honeypot', { source });
      return jsonResponse({ status: 'subscribed_new' }, 200, corsHeaders);
    }

    /* ── Email validation ── */
    email = String(email).trim().toLowerCase();
    if (!isValidEmail(email)) {
      log(reqId, 'invalid_email', {});
      return jsonResponse({ status: 'invalid_email' }, 400, corsHeaders);
    }

    const apiKey = env.BREVO_API_KEY || '';
    const listId = env.BREVO_LIST_ID ? Number(env.BREVO_LIST_ID) : null;

    if (!apiKey) {
      log(reqId, 'misconfigured', { missing: 'BREVO_API_KEY' });
      return jsonResponse({ status: 'upstream_error' }, 500, corsHeaders);
    }

    /* ── Check if contact already exists ── */
    let contactExists = false;
    let contactInList = false;

    try {
      const checkRes = await fetch(
        `${BREVO_CONTACTS}/${encodeURIComponent(email)}`,
        { headers: { 'api-key': apiKey, 'Content-Type': 'application/json' } }
      );

      if (checkRes.status === 200) {
        contactExists = true;
        if (listId) {
          const contact = await checkRes.json();
          contactInList = Array.isArray(contact.listIds) && contact.listIds.includes(listId);
        } else {
          // No list configured — treat existence as "already subscribed"
          contactInList = true;
        }
      } else if (checkRes.status === 404) {
        contactExists = false;
      } else if (checkRes.status === 429) {
        log(reqId, 'rate_limited', { phase: 'check' });
        return jsonResponse({ status: 'rate_limited' }, 429, corsHeaders);
      } else {
        log(reqId, 'upstream_error', { phase: 'check', httpStatus: checkRes.status });
        return jsonResponse({ status: 'upstream_error' }, 502, corsHeaders);
      }
    } catch (_) {
      log(reqId, 'upstream_error', { phase: 'check', err: 'network' });
      return jsonResponse({ status: 'upstream_error' }, 502, corsHeaders);
    }

    /* ── Already subscribed to this list ── */
    if (contactExists && contactInList) {
      log(reqId, 'already_subscribed', {});
      return jsonResponse({ status: 'already_subscribed' }, 200, corsHeaders);
    }

    /* ── Create or update contact ── */
    const createBody = {
      email,
      attributes: {
        LOCALE: locale.slice(0, 5), // guard against oversized values
        SOURCE: String(source).slice(0, 50),
      },
      listIds: listId ? [listId] : [],
      updateEnabled: true, // adds to list even if contact exists in a different list
    };

    try {
      const createRes = await fetch(BREVO_CONTACTS, {
        method: 'POST',
        headers: { 'api-key': apiKey, 'Content-Type': 'application/json' },
        body: JSON.stringify(createBody),
      });

      if (createRes.status === 201 || createRes.status === 204) {
        log(reqId, 'subscribed_new', {});
        // Fire-and-forget welcome email — never blocks the user response, never
        // changes the response shape. Failures are logged for observability.
        ctx.waitUntil(
          sendWelcomeEmail(env, { email, locale, reqId }).catch((err) =>
            log(reqId, 'welcome_email_failed', { err: String(err && err.message || err) })
          )
        );
        return jsonResponse({ status: 'subscribed_new' }, 200, corsHeaders);
      } else if (createRes.status === 429) {
        log(reqId, 'rate_limited', { phase: 'create' });
        return jsonResponse({ status: 'rate_limited' }, 429, corsHeaders);
      } else {
        const errBody = await createRes.text().catch(() => '');
        log(reqId, 'upstream_error', { phase: 'create', httpStatus: createRes.status, body: errBody.slice(0, 200) });
        return jsonResponse({ status: 'upstream_error' }, 502, corsHeaders);
      }
    } catch (_) {
      log(reqId, 'upstream_error', { phase: 'create', err: 'network' });
      return jsonResponse({ status: 'upstream_error' }, 502, corsHeaders);
    }
  },
};

/* ── Helpers ── */

function jsonResponse(body, status, extraHeaders) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', ...extraHeaders },
  });
}

/**
 * Simple RFC 5322-ish email check — the full spec is validated server-side by Brevo.
 * This guards against obviously malformed inputs to avoid unnecessary upstream calls.
 */
function isValidEmail(email) {
  if (!email || email.length > 254) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

/** Structured log line — visible in Cloudflare Workers dashboard Logs tab. */
function log(reqId, event, meta) {
  console.log(JSON.stringify({ reqId, event, ...meta, ts: Date.now() }));
}

/* ── Welcome email ── */

const BREVO_SMTP = 'https://api.brevo.com/v3/smtp/email';

/**
 * Send a bilingual welcome email via Brevo's transactional API.
 * Locale picks the template (ar | en — anything else falls back to en).
 * Throws on misconfiguration or non-2xx upstream so the caller's
 * `.catch()` can log a single `welcome_email_failed` event.
 */
async function sendWelcomeEmail(env, { email, locale, reqId }) {
  const senderEmail = env.BREVO_SENDER_EMAIL || '';
  const senderName  = env.BREVO_SENDER_NAME  || 'Awesome Arabic AI';
  const apiKey      = env.BREVO_API_KEY      || '';

  if (!apiKey || !senderEmail) {
    throw new Error('welcome_email_misconfigured');
  }

  const ctaUrl = env.LEAD_MAGNET_URL || env.SITE_URL || 'https://example.com/';
  const lang = String(locale || 'ar').toLowerCase().startsWith('en') ? 'en' : 'ar';
  const tpl = lang === 'en' ? welcomeEmailEn(ctaUrl) : welcomeEmailAr(ctaUrl);

  const res = await fetch(BREVO_SMTP, {
    method: 'POST',
    headers: { 'api-key': apiKey, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      sender: { name: senderName, email: senderEmail },
      to: [{ email }],
      subject: tpl.subject,
      htmlContent: tpl.html,
      textContent: tpl.text,
      tags: ['welcome', 'awesome-arabic-ai'],
      headers: { 'X-Mailer': 'newsletter-api-worker' },
    }),
  });

  if (res.status >= 200 && res.status < 300) {
    let messageId = '';
    try { messageId = (await res.json()).messageId || ''; } catch (_) {}
    log(reqId, 'welcome_email_sent', { lang, messageId });
    return;
  }

  const body = await res.text().catch(() => '');
  throw new Error(`brevo_${res.status}:${body.slice(0, 200)}`);
}

function welcomeEmailAr(ctaUrl) {
  const subject = 'يسعدنا انضمامك — Awesome Arabic AI 🌟';
  const html = `<!doctype html>
<html dir="rtl" lang="ar">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>${escapeHtml(subject)}</title>
  </head>
  <body style="margin:0;padding:0;background:#0a0a12;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Tahoma,Arial,sans-serif;color:#e4e4e7;">
    <!-- Wrapper -->
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a12;padding:40px 16px;">
      <tr><td align="center">
        <!-- Card -->
        <table role="presentation" width="100%" style="max-width:580px;" cellpadding="0" cellspacing="0">

          <!-- Logo / Brand bar -->
          <tr><td align="center" style="padding-bottom:24px;">
            <span style="display:inline-block;padding:8px 20px;border-radius:999px;background:rgba(245,158,11,0.12);border:1px solid rgba(245,158,11,0.35);color:#fbbf24;font-size:13px;font-weight:700;letter-spacing:0.04em;">✦ Awesome Arabic AI</span>
          </td></tr>

          <!-- Main card -->
          <tr><td style="background:linear-gradient(160deg,rgba(245,158,11,0.1) 0%,rgba(15,15,30,0.98) 60%);border:1px solid rgba(245,158,11,0.28);border-radius:24px;padding:40px 36px;">

            <!-- Headline -->
            <h1 style="margin:0 0 6px;font-size:26px;font-weight:800;line-height:1.25;color:#ffffff;">يسعدنا انضمامك 🎉</h1>
            <p style="margin:0 0 28px;color:#a1a1aa;font-size:14px;">اشتراكك تم بنجاح — ابدأ الآن</p>

            <!-- Divider -->
            <div style="height:1px;background:linear-gradient(to left,transparent,rgba(245,158,11,0.4),transparent);margin-bottom:28px;"></div>

            <!-- Body -->
            <p style="margin:0 0 16px;color:#d4d4d8;font-size:16px;line-height:1.8;">
              انضممت إلى مجتمع يهتم باستخدام الذكاء الاصطناعي بشكل عملي وحقيقي.
            </p>

            <!-- What to expect -->
            <p style="margin:0 0 12px;color:#fbbf24;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;">ما الذي ستحصل عليه</p>
            <table role="presentation" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
              <tr>
                <td style="padding:6px 0;color:#d4d4d8;font-size:15px;line-height:1.7;">
                  <span style="color:#f59e0b;margin-left:10px;">✦</span> برومبتات عربية جاهزة للاستخدام الفوري
                </td>
              </tr>
              <tr>
                <td style="padding:6px 0;color:#d4d4d8;font-size:15px;line-height:1.7;">
                  <span style="color:#f59e0b;margin-left:10px;">✦</span> ورك‌فلوز عملية موفّرة للوقت
                </td>
              </tr>
              <tr>
                <td style="padding:6px 0;color:#d4d4d8;font-size:15px;line-height:1.7;">
                  <span style="color:#f59e0b;margin-left:10px;">✦</span> أدلّة مقارنة بين أدوات الذكاء الاصطناعي
                </td>
              </tr>
              <tr>
                <td style="padding:6px 0;color:#d4d4d8;font-size:15px;line-height:1.7;">
                  <span style="color:#f59e0b;margin-left:10px;">✦</span> محتوى موجّه لاحتياجاتك الحقيقية
                </td>
              </tr>
            </table>

            <!-- CTA -->
            <table role="presentation" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
              <tr>
                <td style="border-radius:14px;background:#f59e0b;box-shadow:0 8px 24px rgba(245,158,11,0.35);">
                  <a href="${escapeAttr(ctaUrl)}" style="display:inline-block;padding:15px 32px;color:#1a1205;text-decoration:none;font-weight:800;font-size:15px;border-radius:14px;">ابدأ الآن &larr;</a>
                </td>
              </tr>
            </table>

            <!-- Footer note -->
            <div style="border-top:1px solid rgba(255,255,255,0.07);padding-top:20px;">
              <p style="margin:0;color:#71717a;font-size:12px;line-height:1.7;">
                اشتركت في هذه القائمة بنفسك. إذا لم تكن أنت، تجاهل هذا البريد ولن تصلك رسائل أخرى.<br>
                يمكنك إلغاء الاشتراك في أي وقت من خلال الرابط في أسفل أي رسالة مستقبلية.
              </p>
            </div>

          </td></tr>

          <!-- Bottom brand note -->
          <tr><td align="center" style="padding-top:20px;">
            <p style="margin:0;color:#52525b;font-size:12px;">Awesome Arabic AI &mdash; محتوى عربي عملي للذكاء الاصطناعي</p>
          </td></tr>

        </table>
      </td></tr>
    </table>
  </body>
</html>`;
  const text = [
    'يسعدنا انضمامك — Awesome Arabic AI',
    '',
    'اشتراكك تم بنجاح.',
    '',
    'ما الذي ستحصل عليه:',
    '  - برومبتات عربية جاهزة للاستخدام الفوري',
    '  - ورك‌فلوز عملية موفّرة للوقت',
    '  - أدلّة مقارنة بين أدوات الذكاء الاصطناعي',
    '  - محتوى موجّه لاحتياجاتك الحقيقية',
    '',
    `ابدأ الآن: ${ctaUrl}`,
    '',
    'اشتركت في هذه القائمة بنفسك. إذا لم تكن أنت، تجاهل هذا البريد.',
  ].join('\n');
  return { subject, html, text };
}

function welcomeEmailEn(ctaUrl) {
  const subject = 'Welcome to Awesome Arabic AI ✨';
  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>${escapeHtml(subject)}</title>
  </head>
  <body style="margin:0;padding:0;background:#0f0f16;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Tahoma,Arial,sans-serif;color:#f4f4f5;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#0f0f16;padding:32px 16px;">
      <tr><td align="center">
        <table role="presentation" width="100%" style="max-width:560px;background:linear-gradient(180deg,rgba(245,158,11,0.08),rgba(15,15,22,0.98));border:1px solid rgba(245,158,11,0.3);border-radius:20px;padding:32px;" cellpadding="0" cellspacing="0">
          <tr><td>
            <div style="display:inline-block;padding:6px 14px;border-radius:999px;background:rgba(245,158,11,0.15);color:#fbbf24;font-size:13px;font-weight:700;margin-bottom:16px;">Welcome 👋</div>
            <h1 style="margin:0 0 12px;font-size:22px;line-height:1.3;color:#ffffff;">You're in — welcome to Awesome Arabic AI</h1>
            <p style="margin:0 0 16px;color:#d4d4d8;font-size:15px;line-height:1.7;">You'll get practical drops on AI: ready-to-use Arabic prompts, real workflows, and guides that actually save you time.</p>
            <p style="margin:0 0 24px;color:#d4d4d8;font-size:15px;line-height:1.7;">Start here — we've curated the best prompts and guides in one place.</p>
            <p style="margin:0 0 24px;">
              <a href="${escapeAttr(ctaUrl)}" style="display:inline-block;background:#f59e0b;color:#1a1205;text-decoration:none;font-weight:800;padding:14px 28px;border-radius:12px;font-size:15px;">Open the site</a>
            </p>
            <p style="margin:24px 0 0;padding-top:20px;border-top:1px solid rgba(255,255,255,0.08);color:#a1a1aa;font-size:13px;line-height:1.6;">If this landed in your inbox by mistake, just ignore it — you won't hear from us again. Every email includes an unsubscribe link if you ever want to opt out.</p>
          </td></tr>
        </table>
      </td></tr>
    </table>
  </body>
</html>`;
  const text = [
    "You're in — welcome to Awesome Arabic AI",
    '',
    "You'll get practical drops on AI: ready-to-use Arabic prompts, real workflows, and guides that actually save you time.",
    '',
    `Start here: ${ctaUrl}`,
    '',
    'If this landed by mistake, just ignore it.',
  ].join('\n');
  return { subject, html, text };
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function escapeAttr(s) {
  return escapeHtml(s);
}
