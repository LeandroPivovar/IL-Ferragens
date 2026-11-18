(function () {
  "use strict";

  var WA = "554891334336";

  // Ano no rodapé
  var ano = document.getElementById("ano");
  if (ano) ano.textContent = new Date().getFullYear();

  // Menu no celular: fecha ao escolher uma seção, com Escape ou clicando fora
  var btn = document.querySelector(".menu-btn");
  var nav = document.getElementById("menu");
  function setMenu(open) {
    btn.setAttribute("aria-expanded", String(open));
    btn.textContent = open ? "Fechar" : "Menu";
    nav.classList.toggle("is-open", open);
  }
  if (btn && nav) {
    btn.addEventListener("click", function () { setMenu(btn.getAttribute("aria-expanded") !== "true"); });
    nav.addEventListener("click", function (e) { if (e.target.tagName === "A") setMenu(false); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && nav.classList.contains("is-open")) { setMenu(false); btn.focus(); } });
    document.addEventListener("click", function (e) { if (nav.classList.contains("is-open") && !nav.contains(e.target) && !btn.contains(e.target)) setMenu(false); });
  }

  // Entradas: título, texto e foto de cada seção, escalonados
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var revealEls = document.querySelectorAll("section h2, .about__text, .services__list .step, .gallery__head p, .contact__intro p, .composer, .faq__facts, .faq__list details, .area__copy p, .reveal");
  revealEls.forEach(function (el, i) {
    el.classList.add("reveal");
    if (!reduce) el.style.transitionDelay = (i % 3) * 80 + "ms";
  });
  if (reduce || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) { el.classList.add("is-in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  }

  // Serviços: a etapa ativa troca a foto ao lado (rolagem ou clique)
  var steps = Array.prototype.slice.call(document.querySelectorAll(".step"));
  var thumbs = document.querySelectorAll(".thumb");
  function activate(n) {
    steps.forEach(function (s) { s.classList.toggle("is-active", s.dataset.step === String(n)); });
    thumbs.forEach(function (t) { t.classList.toggle("is-active", t.dataset.step === String(n)); });
  }
  steps.forEach(function (s) {
    s.addEventListener("click", function () { activate(s.dataset.step); });
  });
  if ("IntersectionObserver" in window && steps.length) {
    var so = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) activate(en.target.dataset.step); });
    }, { rootMargin: "-45% 0px -45% 0px" });
    steps.forEach(function (s) { so.observe(s); });
  }

  // Pedido de orçamento: monta a mensagem e abre o WhatsApp
  var form = document.getElementById("composer");
  var preview = document.getElementById("preview");
  var hidden = document.getElementById("text");
  function message() {
    var need = form.querySelector("input[name=need]:checked").value;
    var stage = form.querySelector("input[name=stage]:checked").value;
    var city = form.querySelector("#city").value.trim();
    return "Olá, IL Ferragens e Construções! Gostaria de um orçamento " + need + ". A obra está " + stage + "." +
      (city ? " Local da obra: " + city + "." : "");
  }
  function update() { var m = message(); preview.textContent = m; hidden.value = m; }
  if (form) {
    form.addEventListener("input", update);
    form.addEventListener("change", update);
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      window.open("https://wa.me/" + WA + "?text=" + encodeURIComponent(message()), "_blank", "noopener");
    });
    update();
  }
})();
