// start slider
let slide = document.querySelectorAll(".slide"),
  arrowRight = document.querySelector("#arrow-right"),
  arrowLeft = document.querySelector("#arrow-left"),
  current = 0;

function cls() {
  for (let i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }
}
function start() {
  cls();
  slide[0].style.display = "block";
}
// show  arrow left
function slideLeft() {
  cls();
  slide[current - 1].style.display = "block";
  current--;
}
// show  arrow right
function slideRight() {
  cls();
  slide[current + 1].style.display = "block";
  current++;
}
// arrow left click
arrowLeft.addEventListener("click", function () {
  if (current === 0) {
    current = slide.length;
  }
  slideLeft();
});
// arrow right click
arrowRight.addEventListener("click", function () {
  if (current === slide.length - 1) {
    current = -1;
  }
  slideRight();
});

start();
// end slider
