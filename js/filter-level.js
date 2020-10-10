var levelMain = document.querySelector('.filter-range');
var levelToggle = document.querySelector('.filter-form__toggle--level');

  levelMain.classList.remove('filter-form__level--nojs');

  levelToggle.addEventListener('click', function() {
    if (levelMain.classList.contains('filter-form__fieldset--closed')) {
      levelMain.classList.remove('filter-form__fieldset--closed');
      levelMain.classList.add('filter-form__fieldset--opened');
    }
    else {
      levelMain.classList.remove('filter-form__fieldset--opened');
      levelMain.classList.add('filter-form__fieldset--closed');
    }
  });
