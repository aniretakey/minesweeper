import { createModal } from './createModal.js';

export function win() {
  const win = new Audio();
  win.src = './assets/audio/win.mp3';
  win.volume = '0.1';

  createModal(true);
  win.play();
}
