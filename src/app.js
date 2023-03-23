const menuBar = document.querySelector(".menu-bar");
const headerNav = document.querySelector(".header-nav");
const menuLinks = document.querySelectorAll(".menu-item");

menuBar.addEventListener("click", () => {
  menuBar.classList.toggle("_active");
  headerNav.classList.toggle("_active");
});

menuLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const targetSelector = link.dataset.goto;
    const targetSection = document.querySelector(targetSelector);

    targetSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    headerNav.classList.remove("_active");
  });
});
