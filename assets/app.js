//import './bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
//import '@popperjs/core';
//import '@symfony/stimulus-bundle';
//import '@hotwired/stimulus';
import './styles/app.css';

import 'jquery';

import $ from 'jquery';
// things on "window" become global variables
window.$ = $;

import Aos from 'aos';
import './styles/aos.css';


// const $ = require('jquery');
// // this "modifies" the jquery module: adding behavior to it
// // the bootstrap module doesn't export/return anything
// require('bootstrap');

import * as bootstrap from 'bootstrap'

// animacje podczas scrolowania
Aos.init({
    duration: 800,
    easing: 'linear',
    offset: 120,
    once: true
});

// preloader
document.onreadystatechange = function () {
    if(document.readyState !== 'complete') {
        document.body.style.visibility = 'hidden';
        document.querySelector('.loader-container').style.visibility = 'visible';
    } else {
        document.querySelector('.loader-container').style.display = 'none';
        document.body.style.visibility = 'visible';
    }
};


// chowanie strzałek w karuzeli z instrukcją do aplikacji efitness//
// const myCarousel = document.querySelector('#rejestracja');
// const carousel = new bootstrap.Carousel(myCarousel, {});

// myCarousel.addEventListener('slid.bs.carousel', () => {
//     checkitem();
// });

// $(function () {
//     checkitem();
// });

// function checkitem() {
//     const $this = $('#rejestracja');
//     if($('#rejestracja .carousel-inner .carousel-item:first').hasClass('active')) {
//         $this.children('.carousel-control-prev').hide();
//         $this.children('.carousel-control-next').show();
//     } else if($('.carousel-inner .carousel-item:last').hasClass('active')) {
//         $this.children('.carousel-control-prev').show();
//         $this.children('.carousel-control-next').hide();
//     } else {
//         $this.children('.carousel-control-prev').show();
//         $this.children('.carousel-control-next').show();

//     }
// }

// koniec //

//grafik//

// document.addEventListener('DOMContentLoaded', function() {
//     const calendarEl = document.querySelector('#calendar');

//     const calendar = new FullCalendar.Calendar(calendarEl,{
//         plugins: [
//             interactionPlugin,
//             dayGridPlugin,
//             googleCalendarPlugin
//         ],
//         googleCalendarApiKey: 'AIzaSyDP243XC-h9sBXUny4AvExzpfkg2jD7VTA',
//         themeSystem: 'bootstrap5',
//         headerToolbar: {
//             start: 'title',
//             center: 'dayGridMonth,dayGridWeek',
//             end: 'today prev,next'
//         },
//         initialView: 'dayGridMonth',
//         initialDate: new Date(),
//         eventColor: '#ff8c00',
//         locale: 'plLocale',
//         firstDay: 1,

//         eventSources: [
//             {
//                 googleCalendarId: 'c1a7a01732723dd8dfb15b01594dd5e7e068f81b3e3d662d8fda6a77e0459ac1@group.calendar.google.com',
//             }
//         ],
//         eventClick: function (info) {
//             info.jsEvent.preventDefault(); // don't let the browser navigate
//         },
//         eventDisplay: 'block',
//         eventOrder: 'start,title,description',
//         eventTimeFormat:
//             {
//                 hour: '2-digit',
//                 minute: '2-digit',
//                 meridiem: false,
//                 hour12: false
//             },
//         displayEventEnd: false,
//         buttonText: {
//             today: 'Dziś',
//             month: 'miesiąc',
//             week: 'tydzień',
//             day: 'dzień',
//             list: 'lista'
//         },
//         buttonHints: {
//             prev: 'Poprzedni $0',
//             next: 'Następny $0',
//             today: 'Dziś',
//             month: 'widok miesiąca',
//             week: 'widok tygodnia'
//         },

//     });

//     calendar.render();
// });

/* button go to top */

//Get the button
const mybutton = document.querySelector('#btn-back-to-top');
const logoHome = document.querySelector('.navbar-brand');

// When the user scrolls down 20px from the top of the document, show the button
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
mybutton.addEventListener("click", backToTop);
logoHome.addEventListener("click", () => {
    backToTop();
    history.pushState("", document.title, window.location.pathname);
});

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


/* zmiana wyglądu toggle buttona */


	$('#nav-icon3').on('click', function() {
		$(this).toggleClass('open');
        
    });

    $('.nav-link').on('click', () => {
        $('#navbarNav').removeClass('show');
        $('#nav-icon3').removeClass('open');
    })

// Skrypt wygenerowano za darmo z uzyciem: https://skrypt-cookies.pl 
// Ekipa autorow skryptu i kontakt z nami: https://skrypt-cookies.pl/o-autorach 
function hovered(){document.getElementById("hcks").style.background="#f8cd96";}function unhovered(){document.getElementById("hcks").style.background="#ff8c00";}function hidecks(){document.getElementById("cookie").style.display="none";setCookie("ck_0bb33dd495b367be","y",30);}function setCookie(name,value,days){var expires="";if(days){var date=new Date();date.setTime(date.getTime()+(days*24*60*60*1000));expires=";expires="+date.toUTCString();}document.cookie=name+"="+(value||"")+expires+";path=/";}function getCookie(name){var nameEQ=name+"=";var ca=document.cookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' ')c=c.substring(1,c.length);if(c.indexOf(nameEQ)==0)return c.substring(nameEQ.length,c.length);}return null;}if(window.addEventListener){window.addEventListener('load',skr_ckz)}else{window.attachEvent('onload',skr_ckz)}function skr_ckz(){let x=getCookie("ck_0bb33dd495b367be");if(!x){let c=document.createElement("aside");let hc=document.createElement("span");c.setAttribute("id","cookie");c.style.zIndex=999999;hc.setAttribute("id","hcks");document.body.appendChild(c);c.style.background="#636a71";c.style.color="#fafafa";hc.style.background="#ff8c00";hc.style.color="#fef9f3";c.innerHTML="<span id=\"cinfo\" style=\"flex: 1 1 auto; margin-top: 2px;\">Na tej stronie używamy plików cookie Google, by móc świadczyć Ci usługi i analizować ruch. [&nbsp;<a href=\"https://policies.google.com/technologies/cookies\" target=\"_blank\" style=\"text-decoration:underline;color:#fafafa;\">Więcej informacji</a>&nbsp;]</span>";hc.innerHTML="Rozumiem";c.style.left="0px";c.style.right="0px";c.style.bottom="0px";c.style.top="auto";c.style.maxWidth="100%";hc.style.padding="12px 30px";hc.style.cursor="pointer";hc.style.display="flex";hc.style.borderRadius=".3rem";hc.style.alignItems="center";hc.style.marginLeft="15px";hc.addEventListener("click",hidecks,false);hc.addEventListener("mouseenter",hovered,false);hc.addEventListener("mouseleave",unhovered,false);c.style.position="fixed";c.style.padding="20px";c.style.fontSize="17px";c.style.display="flex";c.appendChild(hc);}}

/* aktualny rok w stopce z copy */

const date = new Date();
const year = date.getFullYear();
document.querySelector('#rok').innerHTML = year;

// const myModal = new bootstrap.Modal("#exampleModal");
// if(myModal) {
//   	setTimeout(function(){
//     	myModal.show();
//   	}, 5000);
// }

// document.onscroll = function() {
//     setTimeout(myModal.show())
// };

// window.addEventListener('load', function () {
// 	setTimeout(function(){
//     	myModal.show();
// 	}, 2000);
// });



