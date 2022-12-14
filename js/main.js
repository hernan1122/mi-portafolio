const mobileMenu = document.querySelector("#mobile-menu");
const about = document.querySelector("#about");
const jobs = document.querySelector("#jobs");
const contacts = document.querySelector("#contacts");
const barsMenu = document.querySelector(".bars__menu");
const buttonUp = document.querySelector("#button-up");

mobileMenu.addEventListener("click", animateBars);
barsMenu.addEventListener("click", animateBars);
buttonUp.addEventListener("click", scrollUp);

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
  mobileMenu.classList.toggle("inactive");
}

// Switch
//si nos devuelve true, entonces el color preferido del usuario es dark, y si es falso el color preferido es light. El matcMedia nos da el tema predeterminado del usuario
const preferedColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const slider = document.getElementById('slider');
const slider2 = document.getElementById('slider-2');
//const imgFooter = document.getElementById('principal-1');

//para guardar el tema que prefiere el usuario
const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

//para cambiar de tema
slider.addEventListener('click', ()  => {
    let switchToTheme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
  setTheme(switchToTheme);
  //changeImg();
});

//para cambiar de tema en el mebu mobile
slider2.addEventListener('click', ()  => {
    let switchToTheme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
  setTheme(switchToTheme);
  //changeImg();
});

//para que se quede en el tema que el usuario uso la app, y si es la primera vez que entra, que le tome el tema predeterminado
setTheme(localStorage.getItem('theme') || preferedColorScheme);

/* function changeImg() {
  if (preferedColorScheme === 'light') {
    imgFooter.style.backgroundImage = "url('./img/background-footer-oscuro.svg')";
  } else {
    imgFooter.style.backgroundImage = "url('./img/background-footer.svg')";
  }
  console.log(changeImg);
  console.log('hola');
} */

function scrollUp() {
  // esta var nos indica que es el scroll de la pag
  let currentScroll = document.documentElement.scrollTop;

  // si currentScroll es mayor a 0
  if (currentScroll > 0) {
    window.scrollTo(0, 0);
  }
}

// para que aparezca o desaparezca el boton segun el scroll
window.onscroll = function () {
  let scroll = document.documentElement.scrollTop;

  // si scroll es mayor a 400
  if (scroll > 400) {
    buttonUp.style.transform = "scale(1)";
  } else if (scroll < 400) {
    buttonUp.style.transform = "scale(0)";
  }
};

import form from "./modulos/form.js";

document.addEventListener("DOMContentLoaded", () => {
  form("input-name", "input-mail", "input-message", "button-send");
});
