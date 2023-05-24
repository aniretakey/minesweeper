import { createBombs } from './createBombs.js';
import { addFlag } from './addFlag.js';
import { getNumsColors } from './colorNums.js';
import { gameOver } from './gameOver.js';
import { win } from './win.js';
import { soundOn } from './sound.js';
import { seconds } from './timer.js';
import { createModal } from './createModal.js';
import { setNewResult } from './results.js';

export let clicksCount = 0;

export function openCells(width = 10) {
  let field = document.getElementById('field');
  clicksCount = 0;
  soundOn();
  let bombsArr;

  const cells = [...field.children];
  let cellsCount = cells.length;

  field.addEventListener(
    'click',
    (event) => {
      let index = cells.indexOf(event.target);
      bombsArr = createBombs();

      if (bombsArr.includes(index)) {
        bombsArr = createBombs();
      }
    },
    { once: true }
  );

  addFlag();

  let menuClicks = document.querySelector('.moves');

  const cellsSound = new Audio();
  cellsSound.src = './assets/audio/cells.mp3';

  const bomb = new Audio();
  bomb.src = './assets/audio/explosion.wav';
  bomb.volume = '0.05';

  let resultsBtn = document.querySelector('.score');
  resultsBtn.addEventListener('click', () => {
    createModal('results');
  });

  field.addEventListener('click', (event) => {
    let btn = event.target.closest('button');

    if (btn) {
      clicksCount += 1;
      menuClicks.innerHTML = `Moves: ${clicksCount}`;

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
        if (cells[index].classList.contains('flag')) return;

        cell.disabled = 'true';

        if (bombCell(row, column)) {
          cell.innerHTML = '<img src="./assets/icons/bomb4.png">';
          if (localStorage.soundOn == 'true') {
            bomb.play();
          }
          gameOver();
          return;
        }

        cell.classList.add('open');
        if (localStorage.soundOn == 'true') {
          cellsSound.play();
        }
        cellsCount -= 1;

        if (cellsCount <= bombsArr.length) {
          let newResult = setNewResult(clicksCount, seconds);
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
