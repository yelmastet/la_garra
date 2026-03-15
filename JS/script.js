document.addEventListener("DOMContentLoaded", () => {
  const pages = document.querySelectorAll(".page");
  const navLinks = document.querySelectorAll("[data-page]");

  function showPage(id) {
    pages.forEach(page => page.classList.remove("active"));
    const page = document.getElementById(id);
    if (page) page.classList.add("active");
  }

  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const pageId = link.dataset.page;
      showPage(pageId);
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  // Mostrar inicio por defecto
  showPage("inicio");
});
