// MOBILE MENU
const btn = document.querySelector('#menu-btn');
const menu = document.querySelector('#mobile-menu');
const mobileLinks = document.querySelectorAll('#mobile-menu a');

const toggleMobileMenu = () => {
  if (menu) {
    menu.classList.toggle('hidden');
  }
};

const closeMobileMenu = () => {
  if (menu && !menu.classList.contains('hidden')) {
    menu.classList.add('hidden');
  }
};

if (btn) {
  btn.onclick = toggleMobileMenu;
}

if (mobileLinks.length) {
  mobileLinks.forEach((link) => {
    link.addEventListener('click', closeMobileMenu);
  });
}

// LOADER
window.onload = () => {
  const loader = document.querySelector('#loader');
  if (loader) {
    loader.remove();
  }
};