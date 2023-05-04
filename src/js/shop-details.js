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
// start content-size
const sidebarSize = document.querySelectorAll(".size");
const sidelenght = sidebarSize.length;
for (let i = 0; i < sidelenght; i++) {
  sidebarSize.forEach((element) => {
    element.addEventListener("click", function () {
      document.querySelector(".active").classList.remove("active");
      element.classList.add("active");
    });
  });
}
// end content-size
// start shop-details-tabs
let tabs = document.querySelectorAll(".tabs li ");
let tabsArray = Array.from(tabs);
let divs = document.querySelectorAll(".content>div ");
let divsArray = Array.from(divs);

tabsArray.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    // console.log(ele);
    tabsArray.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    divsArray.forEach((div) => {
      div.style.display = "none";
    });
    // console.log(e.currentTarget.dataset.cont);
    document.querySelector(e.currentTarget.dataset.cont).style.display = "block";
  });
});

// console.log(tabsArray);

// end shop-details-tabs

const searhModal = require("./search-modal");
const scroll = require("./scroll");
