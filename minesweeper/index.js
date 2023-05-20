import { createMarkup } from './modules/createMarkup.js';
import { createField, matrix } from './modules/createField.js';
import { changeTheme } from './modules/changeTheme.js';
import { getColors } from './modules/numColors.js';
import { restart } from './modules/restart .js';

createMarkup();

export function newGame() {
  createField();
  changeTheme();
  getColors();
  restart();
}

newGame();
