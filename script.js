// NAV SCROLL BEHAVIOR
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// BURGER MENU
const burger = document.getElementById('burger');

burger.addEventListener('click', () => {
  document.querySelector('.nav__links').classList.toggle('open');
});
