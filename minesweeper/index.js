import { createMarkup } from './modules/createMarkup.js';
import { createField } from './modules/createField.js';
import { changeTheme } from './modules/changeTheme.js';
import { getColors } from './modules/numColors.js';
import { restart } from './modules/restart.js';
import { openCells } from './modules/openCells.js';
import { countTime } from './modules/timer.js';

createMarkup();

export function newGame() {
  createField();
  changeTheme();
  getColors();
  restart();
  openCells();
  countTime();
}

newGame();
