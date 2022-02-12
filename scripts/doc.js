const hamburgerBtn = document.querySelector("#hamburger-btn");
const sidebar = document.querySelector("#sidebar");

hamburgerBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

let classesToAdd = ["active", "hide"];

window.addEventListener("resize", () => {
  if (window.innerWidth < 750) {
    sidebar.classList.add(...classesToAdd);
  } else {
    sidebar.classList.remove(...classesToAdd);
  }
});

// DEMO FOR ALERT

demoAlertCloseBtn = document.querySelector("#demo-alert .alert-cancel");
demoAlert = document.querySelector("#demo-alert");
showAlert = document.querySelector("#alert-demo-undoBtn");

demoAlertCloseBtn.addEventListener("click", () => {
  demoAlert.style.visibility = "hidden";
});

showAlert.addEventListener("click", () => {
  demoAlert.style.visibility = "visible";
});

// DEMO FOR NAVBAR

const resposiveNavbarHamburger = document.querySelector(
  "#navbar-res-hamburger"
);
const navbarResponsive = document.querySelector(".navbar.navbar-resp");
resposiveNavbarHamburger.addEventListener("click", () => {
  console.log(navbarResponsive);
  navbarResponsive.classList.toggle("active");
});
