(function () {
  var html = document.documentElement;
  var header = document.querySelector(".site-header");
  var nav = document.querySelector(".nav");
  var toggle = document.querySelector(".nav-toggle");
  var home = document.body.classList.contains("home");

  function setLang(lang) {
    html.setAttribute("lang", lang);
    try { localStorage.setItem("lusine-lang", lang); } catch (e) {}
    document.querySelectorAll("[data-lang-btn]").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-lang-btn") === lang);
    });
  }

  var saved = null;
  try { saved = localStorage.getItem("lusine-lang"); } catch (e) {}
  setLang(saved === "en" ? "en" : "vi");

  document.querySelectorAll("[data-lang-btn]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      setLang(btn.getAttribute("data-lang-btn"));
    });
  });

  if (toggle && nav) {
    toggle.addEventListener("click", function () { nav.classList.toggle("open"); });
  }

  function onScroll() {
    if (!header) return;
    if (home) header.classList.toggle("is-solid", window.scrollY > 40);
    else header.classList.add("is-solid");
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  var form = document.getElementById("booking-form");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var store = new FormData(form).get("store");
      var phones = { ltt: "+84 28 3822 7188", pmh: "+84 28 5412 0880", sgc: "+84 28 3535 9930" };
      var names = { ltt: "Lê Thánh Tôn", pmh: "Crescent Mall", sgc: "Saigon Centre" };
      var phone = phones[store] || phones.ltt;
      var box = document.getElementById("booking-success");
      if (!box) return;
      box.textContent = html.getAttribute("lang") === "en"
        ? "Call " + names[store] + " at " + phone + " to confirm the table. This page does not send a reservation yet."
        : "Gọi " + names[store] + " số " + phone + " để chốt bàn. Trang này chưa gửi đặt chỗ lên hệ thống.";
      box.classList.add("show");
    });
  }

  document.querySelectorAll("[data-mock-src]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var src = btn.getAttribute("data-mock-src");
      document.querySelectorAll("[data-mock-frame]").forEach(function (frame) {
        frame.src = src;
      });
      document.querySelectorAll("[data-mock-src]").forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
    });
  });
})();
