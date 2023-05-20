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
    for (let i = 0; i < arr.length; i += 1) {
      for (let j = 0; j <= arr[i].length - 1; j += 1) {
        const btn = document.createElement('button');
        btn.classList.add('square');

        let bombCount = getNearBombs(arr, i, j);
        btn.classList.add(bombCount);

        if (arr[i][j] == 1) {
          btn.classList.add('bomb');
        }

        const field = document.getElementById('field');
        field.append(btn);
      }
    }
  }

  let newMatrix = createMatrix();

  function createBombs(bombs, matrix) {
    while (bombs) {
      let height = matrix.length;
      let width = matrix[0].length;

      const y = getRandomNumbers(0, height - 1);
      const x = getRandomNumbers(0, width - 1);

      const bombCell = matrix[y][x];

      if (bombCell == 0) {
        matrix[y][x] = 1;
        bombs -= 1;
      }
    }
    return matrix;
  }

  let matrixWithBombs = createBombs(bombs, newMatrix);
  console.log(matrixWithBombs);
  addButtons(matrixWithBombs);
}

function getNearBombs(matrix, x, y) {
  let i = 0;
  for (let axisX = -1; axisX <= 1; axisX++) {
    for (let axisY = -1; axisY <= 1; axisY++) {
      if (matrix[axisX + x] && matrix[axisX + x][axisY + y]) {
        i += 1;
      }
    }
  }
  return i;
}
