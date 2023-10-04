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
