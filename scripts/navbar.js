mainNavbar = document.querySelector(".main-navbar");
hamburgerNavbar = document.querySelector(".hamburger-navbar");
hamburgerActiveOverlay = document.querySelector(".hamburger-active-overlay");

hamburgerToggleButton = document.querySelector(".main-navbar__hamburger-icon");

hamburgerToggleButton.addEventListener("click", (e) => {
  if (hamburgerNavbar.classList.contains("hamburger-navbar--hidden")) {
    hamburgerNavbar.classList.remove("hamburger-navbar--hidden");
    hamburgerActiveOverlay.classList.add("hamburger-active-overlay--active");
  } else {
    hamburgerNavbar.classList.add("hamburger-navbar--hidden");
    hamburgerActiveOverlay.classList.remove("hamburger-active-overlay--active");
  }
})