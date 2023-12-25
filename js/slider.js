const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  speed: 900,
  effect: 'slider',
  spaceBetween: 20,


  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  //Autoplay

  autoplay: {
    delay: 3000,
  }

});

//const client = new Swiper('.swiper-2', {
//  // Optional parameters
//  slidesPerView: 5,
//  direction: 'horizontal',
//  loop: true,
//  speed: 1200,
//  effect: 'slider',
//  spaceBetween: 20,



//  // Navigation arrows
//  navigation: {
//    nextEl: '.swiper-button-next',
//    prevEl: '.swiper-button-prev',
//  },


//  //autoplay: {
//  //  delay: 3000,
//  //}

//});