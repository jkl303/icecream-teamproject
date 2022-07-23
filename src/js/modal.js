(() => {
  const refs = {
    openModalBtn: document.querySelector('.buy-now'),
    closeModalBtn: document.querySelector('.close-modal-btn'),
    modal: document.querySelector('.modal'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
