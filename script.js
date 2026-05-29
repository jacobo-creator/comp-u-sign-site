const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

toggle.addEventListener('click', () => nav.classList.toggle('nav--open'));

nav.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => nav.classList.remove('nav--open'));
});
