export function countTime() {
  const timer = document.querySelector('.timer');

  function sec() {
    seconds++;
    timer.innerHTML = `${seconds}`;
  }

  let seconds = 0;
  setInterval(sec, 1000);
  seconds++;
}
