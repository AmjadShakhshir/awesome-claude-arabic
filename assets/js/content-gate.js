/**
 * content-gate.js — hard gate (redirect)
 *
 * Non-subscribers are redirected to the landing page (/).
 * Bypasses: bots, ?nogate=1, nl_unlocked=1 in localStorage.
 */

(function () {
  'use strict';

  var GATE_PAGE = (window.SITE_BASEURL || '') + '/';
  var UNLOCK_TOKEN = '__nl_unlocked=1';

  function show() {
    document.documentElement.style.visibility = '';
  }

  function hasUnlockFlag() {
    if (window.__nl_unlocked === true) return true;
    try {
      if (localStorage.getItem('nl_unlocked') === '1') return true;
    } catch (e) {}
    try {
      if (sessionStorage.getItem('nl_unlocked') === '1') return true;
    } catch (e2) {}
    try {
      if ((window.name || '').indexOf(UNLOCK_TOKEN) !== -1) return true;
    } catch (e3) {}
    return false;
  }

  function persistUnlockFlag() {
    window.__nl_unlocked = true;
    try { localStorage.setItem('nl_unlocked', '1'); } catch (e) {}
    try { sessionStorage.setItem('nl_unlocked', '1'); } catch (e2) {}
    try {
      if ((window.name || '').indexOf(UNLOCK_TOKEN) === -1) {
        window.name = (window.name ? window.name + '|' : '') + UNLOCK_TOKEN;
      }
    } catch (e3) {}
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
  if (hasUnlockFlag()) {
    document.body.classList.add('nl-unlocked');
    show();
    return;
  }

  /* ── Redirect non-subscriber to landing ─────────────────────── */
  try {
    window.location.replace(GATE_PAGE);
  } catch (e) {
    window.location.assign(GATE_PAGE);
  }

  /* ── Unlock listener (future-proof, e.g. postMessage flows) ─── */
  window.addEventListener('nl:unlocked', function () {
    persistUnlockFlag();
    document.body.classList.add('nl-unlocked');
    show();
  });
})();
