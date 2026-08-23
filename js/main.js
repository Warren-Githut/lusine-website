(function () {
  var storageKey = "lusine-lang";
  var html = document.documentElement;

  function currentLang() {
    return html.getAttribute("lang") === "en" ? "en" : "vi";
  }

  function setLang(lang) {
    html.setAttribute("lang", lang);
    try {
      localStorage.setItem(storageKey, lang);
    } catch (e) {}
    document.querySelectorAll("[data-lang-btn]").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-lang-btn") === lang);
    });
  }

  function initLang() {
    var saved = null;
    try {
      saved = localStorage.getItem(storageKey);
    } catch (e) {}
    setLang(saved === "en" || saved === "vi" ? saved : "vi");
  }

  document.querySelectorAll("[data-lang-btn]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      setLang(btn.getAttribute("data-lang-btn"));
    });
  });

  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }

  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  var form = document.getElementById("booking-form");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var data = new FormData(form);
      var store = data.get("store") || "";
      var phones = {
        ltt: "+84 28 3822 7188",
        pmh: "+84 28 5412 0880",
        sgc: "+84 28 3535 9930",
      };
      var names = {
        ltt: "L'Usine Lê Thánh Tôn",
        pmh: "L'Usine Crescent Mall",
        sgc: "L'Usine Saigon Centre",
      };
      var phone = phones[store] || "+84 28 3822 7188";
      var box = document.getElementById("booking-success");
      if (box) {
        var lang = currentLang();
        var summary =
          lang === "en"
            ? "Please call " +
              names[store] +
              " at " +
              phone +
              " to confirm your table. We saved your request on this page only."
            : "Vui lòng gọi " +
              names[store] +
              " số " +
              phone +
              " để xác nhận bàn. Yêu cầu mới lưu trên trang này, chưa gửi lên hệ thống.";
        box.textContent = summary;
        box.classList.add("show");
      }
    });
  }

  initLang();
})();
