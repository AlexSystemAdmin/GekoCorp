'use strict'

var swiper = new Swiper('.slider-customer-reviews', {
    slidesPerView: 3,
    slidesPerGroupSkip: 1,
    centeredSlides: false,
    spaceBetween: 24,
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      760: {
        slidesPerView: 2,
      },
      1109: {
        slidesPerView: 3,
        slidesPerGroup: 1
      }
    }
  });

  swiper.on('reachBeginning', function () {
    let btnPrev = document.getElementById('swiper-button-prev');
    btnPrev.classList.add('swiper-button-prev-disabled');
  })

  swiper.on('reachEnd', function () {
    let btnNext = document.getElementById('swiper-button-next');
    btnNext.classList.add('swiper-button-next-disabled');
  })

  swiper.on('slideChange', function () {
    let btnPrev = document.getElementById('swiper-button-prev');
    let btnNext = document.getElementById('swiper-button-next');
    if(!swiper.isBeginning && !swiper.isEnd) {
      btnPrev.classList.remove('swiper-button-prev-disabled');
      btnNext.classList.remove('swiper-button-next-disabled');
    }
  })
