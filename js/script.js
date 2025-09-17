// Replace feather icons
feather.replace();

// toggle navbar
const menuToggle = document.querySelector("#menu-toggle");
const navbarNav = document.querySelector(".navbar-nav");

menuToggle.onclick = (e) => {
  e.preventDefault();
  navbarNav.classList.toggle("active");
};
