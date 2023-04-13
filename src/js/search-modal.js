// start search-modal

let search = document.querySelector(".search-modal");
let openModal = document.querySelector(".open-modal");
let closeModal = document.querySelector(".close-modal");
let open1 = document.querySelector(".open");

openModal.addEventListener("click", modalopen);
closeModal.addEventListener("click", modalclose);
open1.addEventListener("click", modalopen);

function modalopen() {
  search.style.display = "flex";
}
function modalclose() {
  search.style.display = "none";
}
// end search-modal
