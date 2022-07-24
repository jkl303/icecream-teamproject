(() => {
  const refs = {
    openMenuBtn: document.querySelector('.menu-open-btn'),
    closeMenuBtn: document.querySelector('.close-menu-btn'),
    menu: document.querySelector('.mob-menu'),
    body: document.querySelector('body'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('invisible');
    refs.body.classList.toggle('no-scroll');
  }
})();
