var musicMain = document.querySelector('.filter-form__fieldset--music');
var musicToggle = document.querySelector('.filter-form__toggle--music');

  musicMain.classList.remove('filter-form__fieldset--nojs');

  musicToggle.addEventListener('click', function() {
    if (musicMain.classList.contains('filter-form__fieldset--closed')) {
      musicMain.classList.remove('filter-form__fieldset--closed');
      musicMain.classList.add('filter-form__fieldset--opened');
    }
    else {
      musicMain.classList.remove('filter-form__fieldset--opened');
      musicMain.classList.add('filter-form__fieldset--closed');
    }
  });
