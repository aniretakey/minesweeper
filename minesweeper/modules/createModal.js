function createModalMarkup(win) {
  const background = document.createElement('div');
  background.classList.add('modal__background');
  background.id = 'modal__background';

  const window = document.createElement('div');
  window.classList.add('modal__window');

  if (win == true) {
    window.innerHTML = 'You win! 🙂';
  } else {
    window.innerHTML = 'Game over. Try again 🙁';
  }

  const close = document.createElement('div');
  close.classList.add('modal__close');

  const cross = document.createElement('img');
  cross.classList.add('modal__cross');
  cross.src = './assets/icons/cross.png';

  close.append(cross);
  window.append(close);
  background.append(window);

  const wrapper = document.querySelector('.wrapper');
  wrapper.append(background);
}

export function createModal(win) {
  createModalMarkup(win);
  const wrapper = document.querySelector('.modal__background');
  const btnClose = document.querySelector('.modal__close');

  console.log(wrapper);
  wrapper.classList.add('modal__open');

  btnClose.addEventListener('click', function () {
    wrapper.classList.remove('modal__open');
  });

  wrapper.addEventListener('click', function (event) {
    if (event.target === wrapper) {
      wrapper.classList.remove('modal__open');
    }
  });
}
