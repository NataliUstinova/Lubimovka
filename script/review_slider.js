const swiper = new Swiper('.reviews__cards .swiper', { 
  slidesPerView: 3,
  spaceBetween: 30,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
  a11y: {
    prevSlideMessage: 'Previous slide',
    nextSlideMessage: 'Next slide',
  },
  // Navigation arrows
  navigation: {
    nextEl: '.reviews .button-slider_type_next',
    prevEl: '.reviews .button-slider_type_prev',
    disabledClass: 'button-slider_disabled'
  }
});
