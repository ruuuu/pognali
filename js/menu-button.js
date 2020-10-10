var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var pageHead = document.querySelector('.page-header');

  navMain.classList.remove('main-nav--nojs');

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav--closed')){
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
      blueLogo();
    } else {
      navMain.classList.remove('main-nav--opened');
      navMain.classList.add('main-nav--closed');
      if (pageHead.classList.contains('page-header--scrolled') === false) {
        whiteLogo();
      }
  }});
