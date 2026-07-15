// MOBILE MENU
const btn = document.querySelector('#menu-btn');
const menu = document.querySelector('#mobile-menu');

if (btn) {
  btn.onclick = () => {
    menu.classList.toggle('hidden');
  };
}

// LOADER
window.onload = () => {
  const loader = document.querySelector('#loader');
  if (loader) {
    loader.remove();
  }
};