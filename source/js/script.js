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


// Переключение кнопок в услугах

const serviceSlides = document.querySelectorAll('.services__item');
const serviceControls = document.querySelectorAll('.services__control');

for (let i = 0; i < serviceControls.length; i++) {
    (function(i) {
        serviceControls[i].addEventListener('click', function(evt) {
            evt.preventDefault();
            for (let j = 0; j < serviceSlides.length; j++) {
                serviceControls[j].classList.remove('services__control--current');
                serviceSlides[j].classList.remove('services__item--current')
            }
            serviceControls[i].classList.add('services__control--current');
            serviceSlides[i].classList.add('services__item--current')
        })
    }
    )(i)
}

// Modal "Доставка под заказ"

const modalDelivery = document.querySelector('.modal-container');
const linkDelivery = document.querySelector('.special__link');
const closeDeliveryBtn = modalDelivery.querySelector('.modal__close-button');

const form = modalDelivery.querySelector('.delivery-form');
const fieldUser = form.querySelector('.delivery-form__field--name');
const fieldEmail = form.querySelector('.delivery-form__field--email');
const fieldComment = form.querySelector('.delivery-form__field--comment');

linkDelivery.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalDelivery.classList.add('modal-container--show');
  fieldUser.focus();
});

closeDeliveryBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalDelivery.classList.remove('modal-container--show');
  form.reset();
});

form.addEventListener('submit', function (evt) {
  if (!fieldUser.value || !fieldEmail.value || !fieldComment.value) {
    evt.preventDefault();
    form.reset();
  }
});

// Modal map

const modalMap = document.querySelector('.map-modal');
const linkMap = document.querySelector('.navigation__services-link--contacts');
const closeMapBtn = modalMap.querySelector('.map-modal__close-button');

linkMap.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalMap.classList.add('map-modal--show');
});

closeMapBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalMap.classList.remove('map-modal--show');
});
