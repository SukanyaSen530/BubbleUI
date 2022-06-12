// Theme
// function to set a given theme/color-scheme
const setTheme = (themeName) => {
  localStorage.setItem("bubbleTheme", themeName);
  document.documentElement.className = themeName;
};

// function to toggle between light and dark theme
const toggleTheme = () => {
  if (localStorage.getItem("bubbleTheme") === "theme-dark") {
    setTheme("theme-light");
  } else {
    setTheme("theme-dark");
  }
};

// Immediately invoked function to set the theme on initial load
(() => {
  if (localStorage.getItem("bubbleTheme") === "theme-dark") {
    setTheme("theme-dark");
    document.getElementById("theme-toggler").checked = true;
  } else {
    setTheme("theme-light");
    document.getElementById("theme-toggler").checked = false;
  }
})();

//Scroll to top

document.querySelector(".scroll-to-top").addEventListener("click", () => {
  document.body.scrollTop = document.documentElement.scrollTop = 0;
});

// Sidebar - Mobile

const sidebarMobileTrigger = document.getElementById("sidebar-trigger");
const sidebar = document.querySelector(".sidebar");
const sidebarLists = document.querySelectorAll(".sidebar-option");

sidebarMobileTrigger.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

sidebarLists.forEach((option) => {
  option.addEventListener("click", () => {
    sidebar.classList.remove("active");
  });
});

// Alert

demoAlertCloseBtn = document.querySelector("#demo-alert .alert-cancel");
demoAlert = document.querySelector("#demo-alert");
showAlert = document.querySelector("#alert-demo-undoBtn");

demoAlertCloseBtn.addEventListener("click", () => {
  demoAlert.style.visibility = "hidden";
});

showAlert.addEventListener("click", () => {
  demoAlert.style.visibility = "visible";
});

// Modal

const modal = document.querySelector(".modal-overlay");
const openModalButton = document.getElementById("open-modal-button");
const closeButton = document.querySelector("#demo-modal .modal-close-button");
function toggleModal() {
  modal.classList.toggle("show-modal");
}
function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}
openModalButton.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

// Navbar

const resposiveNavbarHamburger = document.querySelector(
  "#navbar-res-hamburger"
);
const navbarResponsive = document.querySelector(".navbar.navbar-resp");
resposiveNavbarHamburger.addEventListener("click", () => {
  navbarResponsive.classList.toggle("active");
});

//Snackbar

const snackbar = document.getElementById("demo-snackbar");

document
  .getElementById("open-snackbar-button")
  .addEventListener("click", () => {
    snackbar.classList.add("snackbar-show");

    setTimeout(() => {
      snackbar.classList.remove("snackbar-show");
    }, 3000);
  });
