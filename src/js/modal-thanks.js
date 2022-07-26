(() => {
  const refs = {
    openModalBtn: document.querySelector('.modal-submit'),
    closeModalBtn: document.querySelector('.close-modal-thanks'),
    modal: document.querySelector('.modal-thanks'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('invisible');
    refs.body.classList.toggle('no-scroll');
  }
})();
