(function () {
  "use strict";

  var STORAGE_KEY = "site-lang";
  var DEFAULT_LANG = "ar";

  function setLang(lang) {
    var body = document.body;
    var html = document.documentElement;

    html.setAttribute("lang", lang);
    html.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

    body.classList.remove("lang-ar", "lang-en");
    body.classList.add("lang-" + lang);
    body.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

    var switches = document.querySelectorAll("[data-set-lang]");
    for (var i = 0; i < switches.length; i++) {
      var el = switches[i];
      el.classList.toggle("active", el.getAttribute("data-set-lang") === lang);
    }

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  var saved = DEFAULT_LANG;
  try { saved = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG; } catch (e) {}
  setLang(saved);

  document.addEventListener("click", function (e) {
    var target = e.target.closest("[data-set-lang]");
    if (target) {
      e.preventDefault();
      setLang(target.getAttribute("data-set-lang"));
    }
  });
})();
