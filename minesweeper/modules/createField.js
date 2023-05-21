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

        const field = document.getElementById('field');
        field.append(btn);
      }
    }
  }

  let newMatrix = createMatrix();

  addButtons(newMatrix);
}
