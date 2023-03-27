const headerNav = document.querySelector(".header-nav");
const menuLinks = document.querySelectorAll(".menu-item");
const burgerMenu = document.querySelector(".burger-menu");
const burgerIcon = document.querySelector(".burger-icon");

burgerMenu.addEventListener("click", () => {
  burgerIcon.classList.toggle("_active");
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
