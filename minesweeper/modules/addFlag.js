export function addFlag(bombs = 10) {
  const field = document.getElementById('field');
  let menuFlags = document.querySelector('.flags');
  let flagsCount = localStorage.bombsCount;
  menuFlags.innerHTML = `Flags: ${localStorage.bombsCount}`;

  const flag = new Audio();
  flag.src = './assets/audio/flag.mp3';
  flag.volume = '0.08';

  field.addEventListener('contextmenu', (event) => {
    let btn = event.target.closest('button');

    event.preventDefault();

    if (btn) {
      if (!btn.classList.contains('open')) {
        if (btn.classList.contains('flag')) {
          flagsCount += 1;
          menuFlags.innerHTML = `Flags: ${flagsCount}`;
          btn.innerHTML = '';
          if (localStorage.soundOn == 'true') flag.play();
          btn.classList.remove('flag');
          return;
        } else {
          flagsCount -= 1;
          menuFlags.innerHTML = `Flags: ${flagsCount}`;
          btn.innerHTML = '<img src="./assets/icons/redflag.png">';
          if (localStorage.soundOn == 'true') flag.play();
          btn.classList.add('flag');
          return;
        }
      }
    }
  });
}
