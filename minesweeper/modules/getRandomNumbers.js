export function getRandomNumbers(arr, bombs = 10) {
  let shuffledArr = arr.sort(() => Math.random() - 0.5);
  return shuffledArr.slice(0, bombs);
}
