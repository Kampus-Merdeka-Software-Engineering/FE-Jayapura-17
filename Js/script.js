const navbarToggle = document.querySelector(".navbar_toggle");
const navbarMenuMobile = document.querySelector(".navbar_menu_mobile");
const BASE_URL = "https://be-jayapura-17-production.up.railway.app";

navbarToggle.addEventListener("click", (e) => {
  e.preventDefault();
  navbarMenuMobile.classList.toggle("open");
});

function KirimPertanyaan(event) {
  const inputNama = document.querySelector("#nama");
  const inputEmail = document.querySelector("#email");
  const inputKomentar = document.querySelector("#pertanyaan");

  const valueNama = inputNama.value;
  const valueEmail = inputEmail.value;
  const valueKomentar = inputKomentar.value;

  fetch(`${BASE_URL}/komentar`, {
    method: "POST",
    headers: {
      "Content-Type": "aplication/json",
    },
    body: JSON.stringify({
      nama: valueNama,
      email: valueEmail,
      komentar: valueKomentar,
    }),
  })
    .then((response) => response.json())
    .then((response) => {
      document.querySelector(".box").innerHTML += `
      <div class="box1">
      <h4>${valueNama} - ${valueEmail}</h4>
      <p>${valueKomentar}</p>
      </div>
      `;
      inputNama.value = "";
      inputEmail.value = "";
      inputKomentar.value = "";
      alert("Komentar berhasil ditambahkan");
    })
    .catch((error) => {
      console.error(error);
    });
}

fetch(`${BASE_URL}/komentar`)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    response.data.map((item) => {
      document.querySelector(".box").innerHTML += `
      <div class="box1">
      <h4>${item.nama} - ${item.email}</h4>
      <p>${item.komentar}</p>
      </div>
      `;
    });
  })
  .catch((error) => {
    console.error(error);
  });
