mainNavbar = document.querySelector(".main-navbar");
hamburgerNavbar = document.querySelector(".hamburger-navbar");
hamburgerActiveOverlay = document.querySelector(".hamburger-active-overlay");

hamburgerToggleButton = document.querySelector(".main-navbar__hamburger-icon");
nightModeToggleButton = document.querySelector(".dark-mode-toggle");

hamburgerToggleButton.addEventListener("click", (e) => {
  if (hamburgerNavbar.classList.contains("hamburger-navbar--hidden")) {
    hamburgerNavbar.classList.remove("hamburger-navbar--hidden");
    hamburgerActiveOverlay.classList.add("hamburger-active-overlay--active");
  } else {
    hamburgerNavbar.classList.add("hamburger-navbar--hidden");
    hamburgerActiveOverlay.classList.remove("hamburger-active-overlay--active");
  }
});

nightModeToggleButton.addEventListener("click", (e) => {
  if (document.body.classList.contains("dark-theme")) {
    document.body.classList.remove("dark-theme");
    nightModeToggleButton.childNodes[1].firstChild.nodeValue = "mode_night";
  } else {
    document.body.classList.add("dark-theme");
    nightModeToggleButton.childNodes[1].firstChild.nodeValue = "light_mode";
  }
})