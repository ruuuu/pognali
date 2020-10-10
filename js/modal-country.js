var modalForm = document.querySelector('.modal-country');
var modal = document.querySelector('.companion-form__select-show-button--modal');
var closeModal = document.querySelector('.modal-country__close-button');
var deleteButton = document.querySelector('.companion-form__select-close-button--modal-close');

modal.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalForm.classList.add("modal-open");
  if (window.innerWidth < 768) {
    deleteButton.classList.remove('companion-form__select-close-button--modal-close');
    deleteButton.classList.add('companion-form__select-close-button--modal-open');
  }
});

closeModal.addEventListener('click', function() {
  modalForm.classList.remove("modal-open");
  if (window.innerWidth < 768) {
    deleteButton.classList.remove('companion-form__select-close-button--modal-open');
    deleteButton.classList.add('companion-form__select-close-button--modal-close');
  }
});
