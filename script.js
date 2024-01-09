function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

/**
 *  darktheme
 */

let contrastToggle = localStorage.getItem('contrastToggle') === 'true';

function toggleContrast() {
  contrastToggle =!contrastToggle;
  if (contrastToggle) {
    document.body.classList += " dark-theme"
    
  } else {
    document.body.classList.remove("dark-theme");
  }
  localStorage.setItem('contrastToggle', contrastToggle);
}

if (contrastToggle) {
  document.body.classList.add("dark-theme");
}



/**
 *  go to top
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 10) {
    goTopBtn.classList.add("active");
  } else {
    goTopBtn.classList.remove("active");
  }

});

 // JavaScript to hide the splash screen when the page is fully loaded
document.addEventListener("DOMContentLoaded", function () {
var splashScreen = document.getElementById("splash-screen");
  if (splashScreen) {
    var delay = 4000;

setTimeout(function () {
splashScreen.classList.add("hidden");

setTimeout(function () {
        splashScreen.style.display = "none";
      }, 1000);
    }, delay);
  }
});