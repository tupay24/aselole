const html = document.documentElement;

const applyTheme = () => {
  const isDark =
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);

  html.classList.toggle('dark', isDark);
};

const toggleTheme = () => {
  const nextTheme = html.classList.contains('dark') ? 'light' : 'dark';
  html.classList.toggle('dark', nextTheme === 'dark');
  localStorage.theme = nextTheme;
};

document.addEventListener('DOMContentLoaded', () => {
  applyTheme();

  const toggle = document.querySelector('#theme-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      toggleTheme();
      toggle.innerHTML = html.classList.contains('dark') ? '☀️' : '🌙';
    });
    toggle.innerHTML = html.classList.contains('dark') ? '☀️' : '🌙';
  }
});

window.addEventListener('load', applyTheme);