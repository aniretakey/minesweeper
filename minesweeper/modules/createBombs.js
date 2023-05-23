import { getRandomNumbers } from './getRandomNumbers.js';

export function createBombs(bombs = 10) {
  let arr = [];
  let count = bombs;

  while (count) {
    let bombNum = getRandomNumbers();
    if (!arr.includes(bombNum)) {
      arr.push(bombNum);
      count -= 1;
    }
  }
  return arr;
}
