var mobileLogo = document.querySelector('.main-nav__logo-image--mobile');
var tabletLogo = document.querySelector('.main-nav__logo-image--tablet');
var desktopLogo = document.querySelector('.main-nav__logo-image--desktop');

whiteLogo();

function blueLogo() {
  mobileLogo.src='img/logo-mobile-blue@1x.png';
  tabletLogo.srcset='img/logo-tablet-blue@1x.png';
  desktopLogo.srcset='img/logo-desktop-blue@1x.png';
}

function whiteLogo() {
  mobileLogo.src='img/logo-mobile-white@1x.png';
  tabletLogo.srcset='img/logo-tablet-white@1x.png';
  desktopLogo.srcset='img/logo-desktop-white@1x.png';
}
