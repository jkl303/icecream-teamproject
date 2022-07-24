(() => {
  const refs = {
    openMenuBtn: document.querySelector('.header__burger-open'),
    closeMenuBtn: document.querySelector('.header__burger-close'),
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
