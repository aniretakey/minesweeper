import { createMarkup } from './modules/createMarkup.js';
import { createField, matrix } from './modules/createField.js';
import { changeTheme } from './modules/changeTheme.js';
import { getColors } from './modules/numColors.js';

createMarkup();

function newGame() {
  createField();
  changeTheme();
  getColors();
}

newGame();
