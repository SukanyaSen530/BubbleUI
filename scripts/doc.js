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

// THEME

const lightTheme = () => {
  document.documentElement.style.setProperty("--white", "#fff");
  document.documentElement.style.setProperty("--dark", "black");
  document.documentElement.style.setProperty("--slate-600", "#475569");
  document.documentElement.style.setProperty(
    "--box-shadow-dark",
    "rgb(0 0 0 / 15%) 0px 2px 8px"
  );
};

const darkTheme = () => {
  document.documentElement.style.setProperty("--white", "#212529");
  document.documentElement.style.setProperty("--dark", "whitesmoke");
  document.documentElement.style.setProperty("--slate-600", "#fff");
  document.documentElement.style.setProperty(
    "--box-shadow-dark",
    "rgb(255 255 255 / 40%) 0px 2px 8px"
  );
};

const changeTheme = () => {
  if (JSON.parse(localStorage.getItem("darkTheme"))) {
    darkTheme();
  } else {
    lightTheme();
  }
};

const indexThemeBtn = document.getElementById("docs-theme-button");
indexThemeBtn.addEventListener("click", () => {
  if (window.localStorage.getItem("darkTheme")) {
    let theme = JSON.parse(window.localStorage.getItem("darkTheme"));
    window.localStorage.setItem("darkTheme", !theme);
  } else {
    window.localStorage.setItem("darkTheme", true);
  }
  changeTheme();
});

changeTheme();


