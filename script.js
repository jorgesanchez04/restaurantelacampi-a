document.addEventListener("DOMContentLoaded", () => {

  // =========================
  // TABS DEL MENÚ
  // =========================

  const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".tab-content");

  // 👉 restaurar categoría guardada
  const savedTab = localStorage.getItem("menuTab");

  if (savedTab) {
    const tabToActivate = document.querySelector(
      `[data-tab="${savedTab}"]`
    );
    const contentToActivate = document.getElementById(savedTab);

    if (tabToActivate && contentToActivate) {
      tabs.forEach(t => t.classList.remove("active"));
      contents.forEach(c => c.classList.remove("active"));

      tabToActivate.classList.add("active");
      contentToActivate.classList.add("active");
    }
  }

  // 👉 click en pestañas
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {

      tabs.forEach(t => t.classList.remove("active"));
      contents.forEach(c => c.classList.remove("active"));

      tab.classList.add("active");

      const target = document.getElementById(tab.dataset.tab);
      if (target) target.classList.add("active");

      // ⭐ guardar categoría
      localStorage.setItem("menuTab", tab.dataset.tab);

    });
  });


  // =========================
  // RECORDAR SCROLL
  // =========================

  // 👉 restaurar scroll al cargar
  const savedScroll = localStorage.getItem("menuScroll");

  if (savedScroll) {
    setTimeout(() => {
      window.scrollTo(0, parseInt(savedScroll));
    }, 100);
  }

  // 👉 guardar scroll mientras se mueve
  window.addEventListener("scroll", () => {
    localStorage.setItem("menuScroll", window.scrollY);
  });


  // =========================
  // BOTONES FLOTANTES
  // =========================

  const floatButtons = document.querySelectorAll(
    ".whatsapp-float, .floating-logo"
  );

  let scrollTimer;

  window.addEventListener("scroll", () => {

    // ocultar mientras hay scroll
    floatButtons.forEach(btn =>
      btn.classList.add("hidden")
    );

    clearTimeout(scrollTimer);

    // mostrar cuando se detiene
    scrollTimer = setTimeout(() => {
      floatButtons.forEach(btn =>
        btn.classList.remove("hidden")
      );
    }, 300);

  });

    // =========================
  // RECORDAR SCROLL DE TABS
  // =========================

  const tabBar = document.querySelector(".menu-tabs");

  if (tabBar) {

    // 👉 restaurar posición
    const savedTabScroll = localStorage.getItem("menuTabScroll");

    if (savedTabScroll) {
      tabBar.scrollLeft = parseInt(savedTabScroll);
    }

    // 👉 guardar posición
    tabBar.addEventListener("scroll", () => {
      localStorage.setItem(
        "menuTabScroll",
        tabBar.scrollLeft
      );
    });

  }


});
