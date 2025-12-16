/* =========================
   STICKY HEADER
   ========================= */
   function initStickyHeader() {
    const header = document.querySelector(".site-header");
    if (!header) return;
  
    const stickyOffset = header.offsetTop;
  
    window.addEventListener("scroll", () => {
      header.classList.toggle("is-sticky", window.scrollY > stickyOffset);
    });
  }
  initStickyHeader();
  
  
  /* =========================
     CATEGORY TABS (UI ONLY)
     ========================= */
  const categoryButtons = document.querySelectorAll(".category-tabs button");
  
  categoryButtons.forEach(button => {
    button.addEventListener("click", () => {
      categoryButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
    });
  });
  
  
  /* =========================
     MOBILE DROPDOWN MENU (OPTION 1)
     ========================= */
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileDropdown = document.querySelector(".mobile-dropdown");
  
  if (menuToggle && mobileDropdown) {
    menuToggle.addEventListener("click", () => {
      mobileDropdown.classList.toggle("open");
  
      const isOpen = mobileDropdown.classList.contains("open");
      menuToggle.setAttribute("aria-expanded", isOpen);
    });
  }
  
  
  /* =========================
     AUTO-CLOSE DROPDOWN ON SCROLL
     (Good UX touch)
     ========================= */
  window.addEventListener("scroll", () => {
    if (mobileDropdown && mobileDropdown.classList.contains("open")) {
      mobileDropdown.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
  