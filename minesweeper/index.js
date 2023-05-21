import { createMarkup } from './modules/createMarkup.js';
import { createField } from './modules/createField.js';
import { changeTheme } from './modules/changeTheme.js';
import { restart } from './modules/restart.js';
import { openCells } from './modules/openCells.js';
import { countTime } from './modules/timer.js';

export function newGame() {
  createMarkup();
  createField();
  openCells();
  changeTheme();
  countTime();
  restart();
}

newGame();
