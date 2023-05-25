export let seconds = 0;
export let interval;

export function countTime() {
  const timer = document.querySelector('.timer');
  const field = document.getElementById('field');

  field.addEventListener(
    'click',
    () => {
      function sec() {
        seconds++;
        timer.innerHTML = `Time: ${seconds}`;
      }

      seconds = 0;
      interval = setInterval(sec, 1000);
      seconds++;
    },
    { once: true }
  );
}
