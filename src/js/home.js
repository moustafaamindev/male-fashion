//start o'clock
let countDownDate = new Date("May 1 , 2023 23:59:59").getTime();
let x = setInterval(function () {
  let now = new Date().getTime();
  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}, 1000);

// start scroll:

let scroll = document.querySelector(".scroll-up");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  if (this.scrollY >= 900) {
    scroll.classList.add("up-show");
  } else {
    scroll.classList.remove("up-show");
  }
};
