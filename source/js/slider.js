// Слайдер

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,

  //слайдер непрерывного цикла
  loop: true,

  //навигация
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  //стрелки
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  //управление клавиатурой
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  //курсор перетаскивая и рукой
  grabCursor: true,

  //автовысота
  autoHeight: true,
});
