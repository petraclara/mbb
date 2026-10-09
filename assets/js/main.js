(function () {
  "use strict";
  var CFG = window.MBB_CONFIG || {};

  // ---------- Year ----------
  var yr = document.getElementById("year");
  if (yr) yr.textContent = new Date().getFullYear();

  // ---------- Mobile menu ----------
  var toggle = document.querySelector(".menu-toggle");
  var nav = document.getElementById("nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // ---------- Social links (from config.js) ----------
  var labels = { facebook: "Facebook", instagram: "Instagram", linkedin: "LinkedIn", youtube: "YouTube" };
  document.querySelectorAll("[data-socials]").forEach(function (box) {
    var s = CFG.socials || {};
    Object.keys(labels).forEach(function (key) {
      if (!s[key]) return;
      var a = document.createElement("a");
      a.href = s[key];
      a.textContent = labels[key];
      a.target = "_blank";
      a.rel = "noopener";
      a.setAttribute("aria-label", "MBB on " + labels[key]);
      box.appendChild(a);
    });
  });

  // ---------- Google Analytics (only if an ID is configured) ----------
  if (CFG.googleAnalyticsId) {
    var g = document.createElement("script");
    g.async = true;
    g.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(CFG.googleAnalyticsId);
    document.head.appendChild(g);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag("js", new Date());
    window.gtag("config", CFG.googleAnalyticsId);
  }

  // ---------- Scroll reveal ----------
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduce) {
    var ro = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("visible"); ro.unobserve(e.target); }
      });
    }, { threshold: 0.1 });
    revealEls.forEach(function (el) { ro.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("visible"); });
  }

  // ---------- Animated counters ----------
  var counters = document.querySelectorAll("[data-count]");
  function setFinal(el) { el.textContent = Number(el.dataset.count).toLocaleString("en-US"); }
  if ("IntersectionObserver" in window && !reduce) {
    var co = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target, target = Number(el.dataset.count), start = performance.now(), dur = 1500;
        (function tick(now) {
          var p = Math.min((now - start) / dur, 1);
          el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))).toLocaleString("en-US");
          if (p < 1) requestAnimationFrame(tick);
        })(start);
        co.unobserve(el);
      });
    }, { threshold: 0.5 });
    counters.forEach(function (el) { co.observe(el); });
  } else {
    counters.forEach(setFinal);
  }

  // ---------- Forms ----------
  function prettyLabel(name) {
    return name.replace(/[_-]+/g, " ").replace(/^./, function (c) { return c.toUpperCase(); });
  }

  document.querySelectorAll("form[data-form]").forEach(function (form) {
    var status = form.querySelector(".form-status");
    var params = new URLSearchParams(window.location.search);

    // Each <option> may carry a short data-key (e.g. "mentor") used in URLs and conditions.
    function keyOf(ctrl) {
      var o = ctrl && ctrl.options && ctrl.options[ctrl.selectedIndex];
      return o ? (o.getAttribute("data-key") || o.value) : (ctrl ? ctrl.value : "");
    }
    function selectByKey(ctrl, key) {
      if (!ctrl || ctrl.tagName !== "SELECT") return;
      Array.prototype.forEach.call(ctrl.options, function (opt) {
        if ((opt.getAttribute("data-key") || opt.value) === key) ctrl.value = opt.value;
      });
    }

    // Pre-select values from the URL, e.g. join.html?role=mentor
    params.forEach(function (value, key) { selectByKey(form.elements[key], value); });

    // Links on the same page can pre-select a field: <a data-how="sponsor">
    document.querySelectorAll("a[data-how]").forEach(function (a) {
      a.addEventListener("click", function () { selectByKey(form.elements["how"], a.getAttribute("data-how")); });
    });

    // Show/hide conditional fields: <div data-show-when="type=institution">
    function updateConditional() {
      form.querySelectorAll("[data-show-when]").forEach(function (el) {
        var parts = el.getAttribute("data-show-when").split("=");
        var show = keyOf(form.elements[parts[0]]) === parts[1];
        el.hidden = !show;
        el.querySelectorAll("input,select,textarea").forEach(function (f) { f.disabled = !show; });
      });
    }
    form.addEventListener("change", updateConditional);
    updateConditional();

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var fd = new FormData(form);
      if (fd.get("_gotcha")) return; // honeypot: bots only
      fd.delete("_gotcha");

      var data = {};
      fd.forEach(function (v, k) { if (String(v).trim() !== "") data[k] = String(v).trim(); });
      var subject = form.getAttribute("data-subject") || "Website enquiry";
      data._subject = subject;
      if (data.email) data._replyto = data.email;

      var btn = form.querySelector("button[type=submit]");

      function setStatus(msg, cls) { if (status) { status.textContent = msg; status.className = "form-status " + (cls || ""); } }

      function viaEmail() {
        var body = Object.keys(data)
          .filter(function (k) { return k.charAt(0) !== "_"; })
          .map(function (k) { return prettyLabel(k) + ": " + data[k]; })
          .join("\n");
        window.location.href = "mailto:" + (CFG.fallbackEmail || "") + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
        setStatus("Opening your email app so you can send your details to MBB…", "ok");
      }

      if (!CFG.formEndpoint) { viaEmail(); return; }

      if (btn) btn.disabled = true;
      setStatus("Sending…", "");
      fetch(CFG.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      })
        .then(function (r) {
          if (!r.ok) throw new Error("bad status");
          form.reset();
          updateConditional();
          setStatus("Thank you! Your submission has been received. The MBB team will get back to you soon.", "ok");
        })
        .catch(function () {
          setStatus("Sorry, we couldn't send that. Please try again, or WhatsApp us on +254 746 275 156.", "err");
        })
        .then(function () { if (btn) btn.disabled = false; });
    });
  });
})();
