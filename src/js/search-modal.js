// start search-modal

let search = document.querySelector(".search-modal");
let openModal = document.querySelector(".open-modal");
let closeModal = document.querySelector(".close-modal");
let open1 = document.querySelector(".open");

function modalopen() {
  search.style.display = "flex";
}
function modalclose() {
  search.style.display = "none";
}

openModal.addEventListener("click", modalopen);
closeModal.addEventListener("click", modalclose);
open1.addEventListener("click", modalopen);
// end search-modal
