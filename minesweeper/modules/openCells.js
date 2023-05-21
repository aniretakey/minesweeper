import { createBombs } from './createBombs.js';
import { addFlag } from './addFlag.js';
import { getNumsColors } from './colorNums.js';
import { gameOver } from './gameover.js';
import { win } from './win.js';

export let clicksCount = 0;

export function openCells(width = 10) {
  clicksCount = 0;
  let bombsArr = createBombs();
  console.log(bombsArr);

  addFlag();

  let field = document.getElementById('field');

  const cells = [...field.children];

  let cellsCount = cells.length;

  const cellsSound = new Audio();
  cellsSound.src = '/assets/audio/cells.mp3';

  const bomb = new Audio();
  bomb.src = '/assets/audio/explosion.wav';
  bomb.volume = '0.05';

  field.addEventListener('click', (event) => {
    let btn = event.target.closest('button');

    if (btn) {
      clicksCount += 1;

      let index = cells.indexOf(event.target);
      const column = index % width;
      const row = Math.floor((index - column) / width);

      function bombCell(row, column) {
        if (bombsArr.includes(row * width + column)) {
          return true;
        }
      }

      function getNearBombs(row, column) {
        let counter = 0;
        {
          for (let i = -1; i <= 1; i += 1) {
            for (let j = -1; j <= 1; j += 1) {
              if (bombCell(row + i, column + j)) {
                if (
                  row + i >= 0 &&
                  row + i < width &&
                  column + j < width &&
                  column + j >= 0
                ) {
                  counter += 1;
                }
              }
            }
          }
        }
        return counter;
      }

      function unavailableCell(row, column, width) {
        if (row >= 0 && row < width && column < width && column >= 0) {
          return true;
        }
      }

      function openNearCells(row, column, width = 10) {
        if (!unavailableCell(row, column, width)) return;

        let index = row * width + column;
        let cell = cells[index];

        if (cell.disabled === true) return;

        cell.disabled = 'true';

        if (bombCell(row, column)) {
          cell.innerHTML = '<img src="./assets/icons/bomb4.png">';
          bomb.play();
          gameOver();
          return;
        }

        cell.classList.add('open');
        cellsSound.play();
        cellsCount -= 1;

        if (cellsCount <= bombsArr.length) {
          win();
        }

        let nearBombs = getNearBombs(row, column);

        if (nearBombs !== 0) {
          cell.innerHTML = nearBombs;
          getNumsColors(nearBombs, cell);
          return;
        }

        for (let i = -1; i <= 1; i += 1) {
          for (let j = -1; j <= 1; j += 1) {
            openNearCells(row + j, column + i);
          }
        }
      }

      openNearCells(row, column);
    }
  });
}
