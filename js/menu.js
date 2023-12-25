
const burger = document.querySelector('.burger');
const span = document.querySelector('.burger__span')
const menu = document.querySelector('.menu')


burger.addEventListener('click', () => {
  burger.classList.toggle('active')
})


burger.addEventListener('click', () => {
  menu.classList.toggle('active')
})
