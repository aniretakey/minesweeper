import { getRandomNumbers } from './getRandomNumbers.js';

export function createField(width = 10, height = 10, bombs = 10) {
  const squaresCount = width * height;

  function createArr(squaresCount = 100) {
    let arr = [];
    for (let i = 0; i <= squaresCount - 1; i++) {
      arr.push(i);
    }
    return arr;
  }

  function addButtons(squaresCount) {
    let arr = createArr(squaresCount);

    arr.forEach((el) => {
      const btn = document.createElement('button');
      btn.classList.add(`${el}`, 'square');

      const field = document.getElementById('field');
      field.append(btn);
    });
  }

  addButtons(squaresCount);

  let arr = createArr();
  let arrBombs;

  const field = document.getElementById('field');

  field.addEventListener(
    'click',
    (event) => {
      function createBombs() {
        arrBombs = getRandomNumbers(arr);
        let clickedSquare = +event.target.classList[0];

        if (arrBombs.includes(clickedSquare)) {
          createBombs();
        } else {
          return arrBombs;
        }
        console.log(arrBombs);
      }
      createBombs();
    },
    { once: true }
  );

  field.addEventListener('click', (event) => {
    if (!event.target.classList.contains('square')) {
      return;
    } else {
      let clickedSquare = +event.target.classList[0];

      if (arrBombs.includes(clickedSquare)) {
        console.log('BOOOM!💣');
        event.target.innerHTML = '<img src="./assets/icons/bomb4.png">';
      } else {
        event.target.classList.add('open');
      }
    }
  });
}
