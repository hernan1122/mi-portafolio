const menuIcon = document.querySelector('.menu-icon');
const mobileMenu = document.querySelector('.mobile-menu');
const about = document.querySelector('#about');
const jobs = document.querySelector('#jobs');
const contacts = document.querySelector('#contacts');

menuIcon.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
  const isAboutClosed = about.classList.contains('inactive');
  if (!isAboutClosed) {
    about.classList.add('inactive');
  }

  mobileMenu.classList.toggle('inactive');
}