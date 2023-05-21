import { newGame } from '../index.js';

export function restart() {
  let restartButton = document.querySelector('.restart');
  const field = document.getElementById('field');
  const timer = document.querySelector('.timer');

  restartButton.addEventListener('click', (event) => {
    field.innerHTML = '';
    timer.innerHTML = '0';
    //need a function to restart timer

    newGame();
  });
}
