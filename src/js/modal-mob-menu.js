(() => {
  const refs = {
    openModalBtn: document.querySelector('.buy-now-menu'),
    closeModalBtn: document.querySelector('.close-modal-menu'),
    modal: document.querySelector('.backdrop__header'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('invisible');
    refs.body.classList.toggle('no-scroll');
  }
})();
