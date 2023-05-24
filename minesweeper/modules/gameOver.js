import { createModal } from './createModal.js';

export function gameOver() {
  const gameover = new Audio();
  gameover.src = './assets/audio/gameover.mp3';
  gameover.volume = '0.1';

  createModal('loose');
  if (localStorage.soundOn == 'true') gameover.play();
}
