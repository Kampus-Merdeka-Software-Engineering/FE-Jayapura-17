const navbarToggle = document.querySelector(".navbar_toggle");
const navbarMenuMobile = document.querySelector(".navbar_menu_mobile");

navbarToggle.addEventListener("click", (e) => {
  e.preventDefault();
  navbarMenuMobile.classList.toggle("open");
});

function KirimPertanyaan(event) {
  const inputNama = document.querySelector("#nama");
  const inputEmail = document.querySelector("#email");
  const inputPertanyaan = document.querySelector("#pertanyaan");

  const valueNama = inputNama.value;
  const valueEmail = inputEmail.value;
  const valuePertanyaan = inputPertanyaan.value;

}