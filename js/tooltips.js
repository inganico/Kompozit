'use strict'

const subMenu = document.querySelector('.submenu ');
const btnMenu = document.querySelector('.menu__link_btn');
const slider = document.querySelector('.swiper-wrapper');



btnMenu.addEventListener('mouseenter', () => {
  subMenu.classList.add('active')
});

slider.addEventListener('mouseleave', (e) => {
  subMenu.classList.remove('active')
})


document.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    subMenu.classList.remove('active')
  }
})  

