// The only script on the page: "Copy" buttons for addresses and hashes.
// No network requests, no storage, no third-party code.
(function () {
  "use strict";

  function fallbackCopy(text) {
    var area = document.createElement("textarea");
    area.value = text;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.select();
    var ok = false;
    try { ok = document.execCommand("copy"); } catch (e) { ok = false; }
    document.body.removeChild(area);
    return ok;
  }

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text).then(function () { return true; }, function () { return fallbackCopy(text); });
    }
    return Promise.resolve(fallbackCopy(text));
  }

  var buttons = document.querySelectorAll("button.copy[data-copy]");
  Array.prototype.forEach.call(buttons, function (btn) {
    var label = btn.textContent;
    btn.addEventListener("click", function () {
      copyText(btn.getAttribute("data-copy")).then(function (ok) {
        btn.textContent = ok ? "Copied" : "Press Ctrl+C";
        btn.classList.toggle("done", ok);
        setTimeout(function () {
          btn.textContent = label;
          btn.classList.remove("done");
        }, 1800);
      });
    });
  });
})();
