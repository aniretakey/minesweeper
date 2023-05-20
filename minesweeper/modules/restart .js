import { newGame } from '../index.js';

export function restart() {
  let restartButton = document.querySelector('.restart');
  const field = document.getElementById('field');

  restartButton.addEventListener('click', (event) => {
    field.innerHTML = '';
    newGame();
  });
}
