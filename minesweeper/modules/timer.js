export let seconds;
export let interval;

export function countTime() {
  const timer = document.querySelector('.timer');
  const field = document.getElementById('field');

  field.addEventListener(
    'click',
    () => {
      function sec() {
        seconds++;
        timer.innerHTML = `${seconds}`;
      }

      seconds = 0;
      interval = setInterval(sec, 1000);
      seconds++;
    },
    { once: true }
  );
}
