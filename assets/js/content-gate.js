/**
 * content-gate.js — hard gate (redirect)
 *
 * Non-subscribers are redirected to the landing page (/).
 * Bypasses: bots, ?nogate=1, nl_unlocked=1 in localStorage.
 */

(function () {
  'use strict';

  var GATE_PAGE = (window.SITE_BASEURL || '') + '/';

  function show() {
    document.documentElement.style.visibility = '';
  }

  /* ── Bot / crawler bypass ────────────────────────────────────── */
  var ua = navigator.userAgent || '';
  var bots = /Googlebot|bingbot|Slurp|DuckDuckBot|Baiduspider|YandexBot|Sogou|facebookexternalhit|Twitterbot|LinkedInBot|WhatsApp|Applebot|GPTBot|ChatGPT-User|ClaudeBot|PerplexityBot/i;
  if (bots.test(ua)) {
    document.body.classList.add('nl-unlocked');
    show();
    return;
  }

  /* ── ?nogate=1 bypass ───────────────────────────────────────── */
  if (/[?&]nogate=1/.test(window.location.search)) {
    document.body.classList.add('nl-unlocked');
    show();
    return;
  }

  /* ── Already unlocked? ──────────────────────────────────────── */
  if (localStorage.getItem('nl_unlocked') === '1') {
    document.body.classList.add('nl-unlocked');
    show();
    return;
  }

  /* ── Redirect non-subscriber to landing ─────────────────────── */
  window.location.replace(GATE_PAGE);

  /* ── Unlock listener (future-proof, e.g. postMessage flows) ─── */
  window.addEventListener('nl:unlocked', function () {
    try { localStorage.setItem('nl_unlocked', '1'); } catch (e) {}
    document.body.classList.add('nl-unlocked');
    show();
  });
})();
