// start product

let all = document.getElementById("Best-Sellers"),
  newAriv = document.getElementById("New-Arrivals"),
  hotSale = document.getElementById("Hot-Sales"),
  newArrivals1 = document.querySelector(".new-arrivals-1"),
  newArrivals2 = document.querySelector(".new-arrivals-2"),
  newArrivals3 = document.querySelector(".new-arrivals-3"),
  newArrivals4 = document.querySelector(".new-arrivals-4"),
  hotSales1 = document.querySelector(".hot-sales-1"),
  hotSales2 = document.querySelector(".hot-sales-2"),
  hotSales3 = document.querySelector(".hot-sales-3"),
  hotSales4 = document.querySelector(".hot-sales-4");

function showall() {
  newArrivals1.classList.remove("remove");
  newArrivals2.classList.remove("remove");
  newArrivals3.classList.remove("remove");
  newArrivals4.classList.remove("remove");
  hotSales1.classList.remove("remove");
  hotSales2.classList.remove("remove");
  hotSales3.classList.remove("remove");
  hotSales4.classList.remove("remove");
  all.classList.add("active-btn");
  newAriv.classList.remove("active-btn");
  hotSale.classList.remove("active-btn");
}
function showsale() {
  hotSales1.classList.add("remove");
  hotSales2.classList.add("remove");
  hotSales3.classList.add("remove");
  hotSales4.classList.add("remove");
  newArrivals1.classList.add("show");
  newArrivals2.classList.add("show");
  newArrivals3.classList.add("show");
  newArrivals4.classList.add("show");
  hotSales1.classList.remove("show");
  hotSales2.classList.remove("show");
  hotSales3.classList.remove("show");
  hotSales4.classList.remove("show");
  newAriv.classList.add("active-btn");
  all.classList.remove("active-btn");
  hotSale.classList.remove("active-btn");
}
function showarrive() {
  hotSales1.classList.add("show");
  hotSales2.classList.add("show");
  hotSales3.classList.add("show");
  hotSales4.classList.add("show");
  newArrivals1.classList.add("remove");
  newArrivals2.classList.add("remove");
  newArrivals3.classList.add("remove");
  newArrivals4.classList.add("remove");
  newArrivals1.classList.remove("show");
  newArrivals2.classList.remove("show");
  newArrivals3.classList.remove("show");
  newArrivals4.classList.remove("show");
  hotSale.classList.add("active-btn");
  newAriv.classList.remove("active-btn");
  all.classList.remove("active-btn");
}

all?.addEventListener("click", showall);
newAriv?.addEventListener("click", showsale);
hotSale?.addEventListener("click", showarrive);

// end product
//start o'clock

let countDownDate = new Date("May 30 , 2023 23:59:59").getTime();
let x = setInterval(function () {
  let now = new Date().getTime();
  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const day = document.getElementById("days");
  const hour = document.getElementById("hours");
  const min = document.getElementById("minutes");
  const sec = document.getElementById("seconds");

  if (sec && min && hour && day) {
    day.innerHTML = days;
    hour.innerHTML = hours;
    min.innerHTML = minutes;
    sec.innerHTML = seconds;
  }
}, 1000);

//end o'clock-
// start navbar active
const currentLocation = location.href;
const navbarActive = document.querySelector(".links").querySelectorAll(".nav-link");
const menuLenght = navbarActive.length;

for (let i = 0; i < menuLenght; i++) {
  // navbarActive.forEach((element) => {
  if (navbarActive[i].href === currentLocation) {
    document.querySelector(".active").classList.remove("active");
    navbarActive[i].classList.add("active");
  }
}
// end navbar active

// start add product to cart

// let cart = document.querySelector(".cart"),
//   addCart = document.getElementsByClassName("add-cart");
// for (let but of addCart) {
//   but.onclick = (e) => {
//     let item = Number(cart.getAttribute("data-count") || 0);
//     cart.setAttribute("data-count", item + 1);
//     cart.classList.add("zero");
//   };
// }

//end add product to cart

const searhModal = require("./search-modal");
const scroll = require("./scroll");
