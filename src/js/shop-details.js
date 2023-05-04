// start shop-details

const items = document.querySelectorAll(".item");
const itemLenght = items.length;
for (let i = 0; i < itemLenght; i++) {
  items.forEach((element) => {
    element.addEventListener("click", function () {
      document.querySelector(".active").classList.remove(".active");
      element.classList.add("active");
    });
  });
}

// end shop-details

const searhModal = require("./search-modal");
const scroll = require("./scroll");
