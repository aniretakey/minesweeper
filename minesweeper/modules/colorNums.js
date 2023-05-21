export function getNumsColors(bombCount, btn) {
  if (bombCount == 1) {
    btn.classList.add('blue');
  }

  if (bombCount == 2) {
    btn.classList.add('green');
  }

  if (bombCount == 3) {
    btn.classList.add('red');
  }

  if (bombCount == 4) {
    btn.classList.add('dark-blue');
  }

  if (bombCount == 5) {
    btn.classList.add('brown');
  }

  if (bombCount == 6) {
    btn.classList.add('cyan');
  }

  if (bombCount == 7) {
    btn.classList.add('black');
  }

  if (bombCount == 8) {
    btn.classList.add('grey');
  }
}
