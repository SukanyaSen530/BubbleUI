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
    document.getElementById("theme-toggler").checked = false;
  } else {
    setTheme("theme-light");
    document.getElementById("theme-toggler").checked = true;
  }
})();
