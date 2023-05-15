import { createMarkup } from './modules/createMarkup.js';
import { createField } from './modules/createField.js';
import { changeTheme } from './modules/changeTheme.js';

createMarkup();

function newGame() {
  createField();
}

newGame();
changeTheme();
