// On page load or when changing themes, best to add inline in `head` to avoid FOUC
const themeToggle = document.querySelector('.darkmode-toggle input');
const light = 'light';
const dark = 'dark';
let isDark = localStorage.theme === dark || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
if (isDark) {
  document.documentElement.classList.add(dark);
  themeToggle.checked = true;
} else {
  document.documentElement.classList.remove(dark);
  themeToggle.checked = false;
}

themeToggle.addEventListener('change', function () {
  if (this.checked) {
    localStorage.theme = dark;
    document.documentElement.classList.add(dark);
  } else {
    localStorage.theme = light;
    document.documentElement.classList.remove(dark);
  }
});
