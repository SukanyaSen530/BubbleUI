const lightTheme = () => {
  document.documentElement.style.setProperty("--white", "whitesmoke");
  document.documentElement.style.setProperty("--dark", "black");
};

const darkTheme = () => {
  document.documentElement.style.setProperty("--white", "#212529");
  document.documentElement.style.setProperty("--dark", "whitesmoke");
};

const changeTheme = () => {
  if (JSON.parse(localStorage.getItem("darkTheme"))) {
    darkTheme();
  } else {
    lightTheme();
  }
};

const indexThemeBtn = document.getElementById("indexThemebtn");

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
