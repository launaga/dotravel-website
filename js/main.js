/* dotravel — front-end interactions (vanilla, no dependencies)
 * Handles: mobile nav, language toggle, and the home hero slider.
 * The sticky trip-detail rail is pure CSS (see .detail__aside in styles.css).
 */
(function () {
  "use strict";

  /* ---- Mobile nav ---- */
  var toggle = document.querySelector("[data-nav-toggle]");
  var nav = document.querySelector("[data-site-nav]");
  if (toggle && nav) {
    toggle.setAttribute("aria-expanded", "false");
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.textContent = isOpen ? "×" : "☰";
    });
    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.textContent = "☰";
      }
    });
  }

  /* ---- Journey traveller pricing ---- */
  var countEl = document.querySelector("[data-travellers-count]");
  var totalEl = document.querySelector("[data-price-total]");
  var totalLabel = document.querySelector("[data-price-label]");
  if (countEl && totalEl && totalLabel) {
    var travellers = 2;
    var pricePerTraveller = 28550000;
    var formatRupiah = new Intl.NumberFormat("id-ID");
    function renderPrice() {
      countEl.textContent = travellers;
      totalLabel.textContent = "Total · " + travellers + (travellers === 1 ? " traveller" : " travellers");
      totalEl.textContent = "Rp " + formatRupiah.format(travellers * pricePerTraveller);
    }
    var decrease = document.querySelector("[data-travellers-decrease]");
    var increase = document.querySelector("[data-travellers-increase]");
    decrease.addEventListener("click", function () { travellers = Math.max(1, travellers - 1); renderPrice(); });
    increase.addEventListener("click", function () { travellers = Math.min(12, travellers + 1); renderPrice(); });
  }

  /* ---- Compose brief prototype ---- */
  var composeForm = document.querySelector("[data-compose-form]");
  var composeResult = document.querySelector("[data-compose-result]");
  if (composeForm && composeResult) {
    var monthFormat = new Intl.DateTimeFormat("en", { month: "long", year: "numeric", timeZone: "UTC" });
    composeForm.addEventListener("submit", function (event) {
      event.preventDefault();
      var data = new FormData(composeForm);
      var month = String(data.get("when") || "");
      var whenLabel = month ? monthFormat.format(new Date(month + "-01T00:00:00Z")) : "your preferred window";
      var people = Number(data.get("travellers") || 2);
      composeResult.querySelector("[data-compose-summary]").textContent = "Starting from " + data.get("origin") + " in " + whenLabel + " for " + people + (people === 1 ? " traveller." : " travellers.");
      composeForm.hidden = true;
      composeResult.hidden = false;
      composeResult.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "center" });
    });
  }

  /* ---- Language toggle (visual state only — wire to i18n in build) ---- */
  var langBtns = document.querySelectorAll("[data-lang]");
  langBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      langBtns.forEach(function (b) { b.classList.remove("is-active"); });
      btn.classList.add("is-active");
      document.documentElement.setAttribute("lang", btn.getAttribute("data-lang"));
    });
  });

  /* ---- Hero slider ---- */
  var slider = document.querySelector("[data-slider]");
  if (slider) {
    var slides = Array.prototype.slice.call(slider.querySelectorAll(".slider__slide"));
    var dotsWrap = slider.querySelector("[data-slider-dots]");
    var index = 0;
    var timer = null;
    var DURATION = 6000;

    // build dots
    slides.forEach(function (_, i) {
      var dot = document.createElement("button");
      dot.className = "slider__dot" + (i === 0 ? " is-active" : "");
      dot.setAttribute("aria-label", "Go to slide " + (i + 1));
      dot.addEventListener("click", function () { go(i); });
      dotsWrap.appendChild(dot);
    });
    var dots = Array.prototype.slice.call(dotsWrap.children);

    function render() {
      slides.forEach(function (s, i) { s.classList.toggle("is-active", i === index); });
      dots.forEach(function (d, i) { d.classList.toggle("is-active", i === index); });
    }
    function go(i) {
      index = (i + slides.length) % slides.length;
      render();
      restart();
    }
    function next() { go(index + 1); }
    function prev() { go(index - 1); }
    function restart() {
      clearInterval(timer);
      timer = setInterval(next, DURATION);
    }

    var prevBtn = slider.querySelector("[data-slider-prev]");
    var nextBtn = slider.querySelector("[data-slider-next]");
    if (prevBtn) prevBtn.addEventListener("click", prev);
    if (nextBtn) nextBtn.addEventListener("click", next);

    render();
    restart();
    // pause on hover
    slider.addEventListener("mouseenter", function () { clearInterval(timer); });
    slider.addEventListener("mouseleave", restart);
  }

  /* ---- Footer year ---- */
  var yr = document.querySelector("[data-year]");
  if (yr) yr.textContent = new Date().getFullYear();
})();
