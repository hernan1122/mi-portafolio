const mobileMenu = document.querySelector('.mobile-menu');
const about = document.querySelector('#about');
const jobs = document.querySelector('#jobs');
const contacts = document.querySelector('#contacts');
const barsMenu = document.querySelector(".bars__menu").addEventListener("click", animateBars);

let line1__bars = document.querySelector(".line1__bars-menu");
let line2__bars = document.querySelector(".line2__bars-menu");
let line3__bars = document.querySelector(".line3__bars-menu");

function animateBars(){
    // aplica a los nodos seleccionados el estilo de css
    line1__bars.classList.toggle("activeline1__bars-menu");
    line2__bars.classList.toggle("activeline2__bars-menu");
  line3__bars.classList.toggle("activeline3__bars-menu");
  console.log('hola');

  toggleMobileMenu();
}

function toggleMobileMenu() {
  const isAboutClosed = about.classList.contains('inactive');
  if (!isAboutClosed) {
    about.classList.add('inactive');
  }

  mobileMenu.classList.toggle('inactive');
  console.log('funciono');
}