var foodMain = document.querySelector('.filter-form__fieldset--food');
var foodToggle = document.querySelector('.filter-form__toggle--food');

  foodMain.classList.remove('filter-form__fieldset--nojs');

  foodToggle.addEventListener('click', function() {
    if (foodMain.classList.contains('filter-form__fieldset--closed')) {
      foodMain.classList.remove('filter-form__fieldset--closed');
      foodMain.classList.add('filter-form__fieldset--opened');
    }
    else {
      foodMain.classList.remove('filter-form__fieldset--opened');
      foodMain.classList.add('filter-form__fieldset--closed');
    }
  });
