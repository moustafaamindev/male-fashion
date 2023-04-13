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
