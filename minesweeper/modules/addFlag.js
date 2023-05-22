export function addFlag() {
  const field = document.getElementById('field');

  const flag = new Audio();
  flag.src = './assets/audio/flag.mp3';
  flag.volume = '0.08';

  field.addEventListener('contextmenu', (event) => {
    let btn = event.target.closest('button');

    event.preventDefault();

    if (btn) {
      if (!btn.classList.contains('open')) {
        if (btn.classList.contains('flag')) {
          console.log('remove flag');
          btn.innerHTML = '';
          btn.classList.remove('flag');
          return;
        } else {
          console.log('add flag');
          btn.innerHTML = '<img src="./assets/icons/redflag.png">';
          flag.play();
          btn.classList.add('flag');
          return;
        }
      }
    }
  });
}
