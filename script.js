var navbar = document.getElementById("navbar");
var menu = document.getElementById("menu");

var hero = document.getElementById("hero");

window.onscroll = function () {
  if (window.pageYOffset >= menu.offsetHeight) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};

const menuBar = document.querySelector(".menu-bar");
const navMenu = document.querySelector(".nav-menu");

menuBar.addEventListener("click", mobileMenu);
function mobileMenu() {
  menuBar.classList.toggle("active");
  navMenu.classList.toggle("active");
}

let loadMoreBtn = document.querySelector("#load-btn");
let currentItem = 3;
let imageContainers = [
  ...document.querySelectorAll(".Projects .image-gallery .image-container"),
];
loadMoreBtn.onclick = function () {
  for (var i = currentItem; i < currentItem + 3; i++) {
    imageContainers[i].style.display = "inline-block";
  }
  currentItem += 3;
  console.log(currentItem);
  console.log(imageContainers.length);
  if (currentItem >= imageContainers.length) {
    loadMoreBtn.style.display = "none";
  }
};
