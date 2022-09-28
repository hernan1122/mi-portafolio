const mobileMenu = document.querySelector('.mobile-menu');
const about = document.querySelector('#about');
const jobs = document.querySelector('#jobs');
const contacts = document.querySelector('#contacts');
const barsMenu = document.querySelector('.bars__menu');
const buttonUp = document.querySelector('#button-up');

mobileMenu.addEventListener('click', animateBars);
barsMenu.addEventListener('click', animateBars);
buttonUp.addEventListener('click', scrollUp);

let line1__bars = document.querySelector(".line1__bars-menu");
let line2__bars = document.querySelector(".line2__bars-menu");
let line3__bars = document.querySelector(".line3__bars-menu");

function animateBars() {
    // aplica a los nodos seleccionados el estilo de css
  line1__bars.classList.toggle("activeline1__bars-menu");
  line2__bars.classList.toggle("activeline2__bars-menu");
  line3__bars.classList.toggle("activeline3__bars-menu");

  toggleMobileMenu();
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle('inactive');
}

function scrollUp() {
  // esta var nos indica que es el scroll de la pag
  let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

  // si currentScroll es mayor a 0
  if (currentScroll > 0) {
    window.requestAnimationFrame(scrollUp);
    window.scrollTo(0, currentScroll - (currentScroll / 10));
  }
}

// para que aparezca o desaparezca el boton segun el scroll
window.onscroll = function () {
  let scroll = document.documentElement.scrollTop;

  // si scroll es mayor a 100
  if (scroll > 400) {
    buttonUp.style.transform = 'scale(1)';
  } else if (scroll < 200) {
    buttonUp.style.transform = 'scale(0)';
  }
}