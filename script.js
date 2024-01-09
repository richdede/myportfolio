function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


let contrastToggle=false;
function toggleContrast() {
  contrastToggle =!contrastToggle;
  if (contrastToggle) {
    document.body.classList += " dark-theme"
    
  } else {
    document.body.classList.remove("dark-theme");
  }
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