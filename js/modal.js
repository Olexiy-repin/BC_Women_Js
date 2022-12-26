const modalOpenBtnEl = document.querySelector('.js-modal-open');
const backdropEl = document.querySelector('.js-backdrop');
const closeModalBtnEl = document.querySelector('.js-modal-close');

const onModalOpenBtnClick = event => {
  backdropEl.classList.add('is-open');

  document.addEventListener('keydown', onEscKeyBtnPress);
};

const closeModal = () => {
  backdropEl.classList.remove('is-open');

  document.removeEventListener('keydown', onEscKeyBtnPress);
};

const onEscKeyBtnPress = event => {
  console.log(event.code);

  if (event.code === 'Escape') {
    closeModal();
  }
};

const onBackdropElClick = event => {
  const { target, currentTarget } = event;

  if (target !== currentTarget) {
    return;
  }

  closeModal();
};

modalOpenBtnEl.addEventListener('click', onModalOpenBtnClick);
closeModalBtnEl.addEventListener('click', closeModal);
backdropEl.addEventListener('click', onBackdropElClick);
