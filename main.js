const body = document.getElementById("body");
const menu = document.getElementsByClassName("dp-menu");
const banner = document.getElementById("banner");

const loginBox = document.getElementById("login");
// function dpMenu(element) {
//     if (element.className == "category fashion") {
//         menu[0].style.opacity = "1";
//     }
//     else if (element.className == "category electronics") {
//         menu[1].style.opacity = "1";
//     }
//     else if (element.className == "category home") {
//         menu[2].style.opacity = "1";
//     }
//     else {
//         menu[3].style.opacity = "1";
//     }
// }


// function closeMenu(element) {
//     if (element.className == "category fashion") {
//         menu[0].style.opacity = "0";
//     }
//     else if (element.className == "category electronics") {
//         menu[1].style.opacity = "0";
//     }
//     else if (element.className == "category home") {
//         menu[2].style.opacity = "0";
//     }
//     else {
//         menu[3].style.opacity = "0";
//     }

// }

function openLogin() {
    loginBox.style.display = "block";
    body.style.overflow = "hidden";
}

function closeLogin() {
    loginBox.style.display = "none";
    body.style.overflow = "auto";
}

const banner_lst = ["assets/banner1.webp","assets/banner2.webp","assets/banner3.webp"]

function prevBanner() {
// console.log(banner.style.getPropertyValue("background"));
banner.style.background = `url(${banner_lst[1]})`;

}
function afterBanner() {
// console.log(banner.style.getPropertyValue("background"));
banner.style.background = `url(${banner_lst[2]})`;
}

// Banner Slideshow

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 