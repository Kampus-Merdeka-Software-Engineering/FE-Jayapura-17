const navbarToggle = document.querySelector(".navbar_toggle");
const navbarMenuMobile = document.querySelector(".navbar_menu_mobile");

navbarToggle.addEventListener("click", (e) => {
  e.preventDefault();
  navbarMenuMobile.classList.toggle("open");
});