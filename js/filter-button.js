var filterMain = document.querySelector('.country-filter');
var filterToggle = document.querySelector('.country-filter__toggle');
var filterClose = document.querySelector('.country-filter__close');

  filterMain.classList.remove('country-filter--nojs');

  filterToggle.addEventListener('click', function(evt) {
    evt.preventDefault();
    if (filterMain.classList.contains('country-filter--closed')) {
      filterMain.classList.remove('country-filter--closed');
      filterMain.classList.add('country-filter--opened');
    } else {
      filterMain.classList.add('country-filter--closed');
      filterMain.classList.remove('country-filter--opened');
    }
  });

  filterClose.addEventListener('click',function() {
    filterMain.classList.remove('country-filter--opened');
    filterMain.classList.add('country-filter--closed');
  });
