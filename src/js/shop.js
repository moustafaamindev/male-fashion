// start sidebar-size
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
// end sidebar-size

const searhModal = require("./search-modal");
const scroll = require("./scroll");

// start section shop 

let rotate = document.querySelector('.drop_arow'),
  icon = document.querySelector('.rotate-arow');

function rotates() {
  icon.classList.toggle('rotate')
};
rotate?.addEventListener("click", rotates);

// end section shop 