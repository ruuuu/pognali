var pageScroll = document.querySelector('.page-header');
var mainNavScroll = document.querySelector('.main-nav');
var pageMainScroll = document.querySelector('.page-main');

window.addEventListener('scroll', function() {
  if (window.innerWidth < 1440) {
    mainNavScroll.classList.add('main-nav--scrolled');
    pageScroll.classList.add('page-header--scrolled');
    pageMainScroll.classList.add('page-main--scrolled');
    blueLogo();

  } else

  if (window.innerWidth >= 1440 && window.pageYOffset >= 750) {
    mainNavScroll.classList.add('main-nav--scrolled');
    pageScroll.classList.add('page-header--scrolled');
    pageMainScroll.classList.add('page-main--scrolled');
    blueLogo();
  }

  if ((window.pageYOffset === 0 && mainNavScroll.classList.contains('main-nav--opened') === false) || (window.innerWidth >= 1440 && window.pageYOffset < 750)) {
    mainNavScroll.classList.remove('main-nav--scrolled');
    pageScroll.classList.remove('page-header--scrolled');
    pageMainScroll.classList.remove('page-main--scrolled');
      whiteLogo();
  }
});
