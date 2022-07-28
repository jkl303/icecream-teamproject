document
  .querySelector('.header__burger-open')
  .addEventListener('click', function () {
    var elementOne = document.getElementById('buy-now-tab');

    if (elementOne.classList.contains('hidden')) {
      elementOne.classList.remove('hidden');
    } else {
      elementOne.classList.add('hidden');
    }
  });

document
  .querySelector('.header__burger-close')
  .addEventListener('click', function () {
    var elementOne = document.getElementById('buy-now-tab');

    if (elementOne.classList.contains('hidden')) {
      elementOne.classList.remove('hidden');
    } else {
      elementOne.classList.add('hidden');
    }
  });
