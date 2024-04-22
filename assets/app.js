import './bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import '@popperjs/core';
//import '@symfony/stimulus-bundle';
//import '@hotwired/stimulus';
import './styles/app.css';

import 'jquery';

import $ from 'jquery';
// things on "window" become global variables
window.$ = $;

import Aos from 'aos';
import './styles/aos.css';


// preloader

// document.body.style.visibility = 'hidden';
// window.addEventListener('load', (event) => {

//       document.querySelector('.loader-container').style.display = 'none';
//       document.body.style.visibility = 'visible';
//   }
// );

const preloader = document.querySelector('#preloader');

//document.body.style.visibility = 'hidden';
//preloader.classList.add('show-preloader');

window.addEventListener('load', function () {
  //document.body.style.visibility = 'visible';
  preloader.classList.remove('show-preloader');
	// setTimeout(function(){
  //   	preloader.classList.remove('show-preloader');
	// }, 2000);
});



Aos.init({
  duration: 400,
  easing: 'linear',
  offset: 120,
  once: false
});

//console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉');

/* zmiana wyglądu toggle buttona */

const toggleButton = document.querySelector('#nav-icon3');
const navBar = document.querySelector('#navbarNav');
const navLinks = document.querySelectorAll('.nav-link');

toggleButton.addEventListener('click', function() {
    this.classList.toggle('open');
});

navLinks.forEach((navLink) => {
    navLink.addEventListener('click', () => {
        navBar.classList.remove('show');
        toggleButton.classList.remove('open');
    });
});

/* button go to top */

//Get the button
const mybutton = document.querySelector('#btn-back-to-top');
const logoHome = document.querySelector('.navbar-brand');
const startUp = document.querySelector('#start-up');

// When the user scrolls down 600px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 600 ||
    document.documentElement.scrollTop > 600
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener('click', backToTop);
startUp.addEventListener('click', backToTop);
logoHome.addEventListener('click', backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  history.pushState("", document.title, window.location.pathname);
}

const dropDownItem = document.querySelector('#lang-dropdown');
//const backToHp = document.querySelector('#btn-back-to-hp');
const logoButton = document.querySelector('#logo-button');

dropDownItem.addEventListener('click', (event) => {
  setTimeout(() => {
    location.reload();
  }, 500);
});

// if(backToHp) {
//   backToHp.addEventListener('click', () => {
//     setTimeout(() => {
//       location.reload();
//     }, 500);
//   });
// }

if(logoButton) {
  logoButton.addEventListener('click', () => {
   
    setTimeout(() => {
      location.reload();
    }, 500);
  });
}

