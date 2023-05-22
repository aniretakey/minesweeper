import { newGame } from '../index.js';
import { interval } from './timer.js';

export function restart() {
  let restartButton = document.querySelector('.restart');
  const body = document.getElementsByTagName('body')[0];

  restartButton.addEventListener('click', (event) => {
    body.innerHTML = '';
    clearInterval(interval);
    newGame();
  });
}
