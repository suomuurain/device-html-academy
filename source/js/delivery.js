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
