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
