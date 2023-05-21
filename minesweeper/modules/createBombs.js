import { getRandomNumbers } from './getRandomNumbers.js';

export function createBombs(bombs = 10) {
  let arr = [];
  for (let i = 1; i <= bombs; i += 1) {
    let bombNum = getRandomNumbers();
    if (arr.includes(bombNum)) continue;
    arr.push(bombNum);
  }
  return arr;
}
