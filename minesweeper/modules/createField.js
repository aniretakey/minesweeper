import { getRandomNumbers } from './getRandomNumbers.js';

export let field = [];
export let matrix = [];

export function createField(width = 10, height = 10, bombs = 10) {
  const squaresCount = width * height;

  function createMatrix() {
    matrix.length = squaresCount;
    const subArrSize = width;
    let slicedArr = [];

    for (let i = 0; i < matrix.length; i += subArrSize) {
      slicedArr.push(matrix.slice(i, i + subArrSize).fill(0));
    }

    return slicedArr;
  }

  function addButtons(arr) {
    arr.forEach((el) => {
      el.forEach((item) => {
        const btn = document.createElement('button');
        btn.classList.add(`${el}`, 'square');

        const field = document.getElementById('field');
        field.append(btn);
      });
    });
  }

  let newMatrix = createMatrix();
  addButtons(newMatrix);

  function createBombs(bombs, matrix) {
    let bombsCount = bombs;
    while (bombsCount) {
      let height = matrix.length;
      let width = matrix[0].length;

      const y = getRandomNumbers(0, height - 1);
      const x = getRandomNumbers(0, width - 1);

      const bombCell = matrix[y][x];

      if (bombCell == 0) {
        matrix[y][x] = 1;
        bombsCount -= 1;
      }
    }
    console.log(matrix);
  }

  createBombs(bombs, newMatrix);
}
