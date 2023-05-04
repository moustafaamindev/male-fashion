const searchModal = require("./search-modal");
const scroll = require("./scroll");

let stats = document.querySelectorAll(".counter_item_number .number");
let section = document.querySelector(".counter_item");
let started = false;

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop) {
    if (!started) {
      stats.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
