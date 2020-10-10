var popupMain = document.querySelector('.modal');
var popup = document.querySelector('.profile__button');
var close = document.querySelector('.modal__button');

popup.addEventListener('click', function(evt) {
  evt.preventDefault();
  popupMain.classList.add("modal-show");
});

close.addEventListener('click', function() {
  popupMain.classList.remove("modal-show");
});
