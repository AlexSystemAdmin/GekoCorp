'use strict'

var swiper = new Swiper('.slider-team', {
    slidesPerView: 4,
    slidesPerGroupSkip: 1,
    spaceBetween: 24,
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: '.swiper-pagination-team',
      clickable: true,
    },
    /*navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },*/
    breakpoints: {
      300: {
        slidesPerView: 1,
      },
      650: {
        slidesPerView: 2,
      },
      890: {
        slidesPerView: 3,
      },
      1120: {
        slidesPerView: 4,
        slidesPerGroup: 1
      }
    }
  });