import { createMarkup } from './modules/createMarkup.js';
import { createField, matrix } from './modules/createField.js';
import { changeTheme } from './modules/changeTheme.js';

createMarkup();

function newGame() {
  createField();
  changeTheme();
}

newGame();
