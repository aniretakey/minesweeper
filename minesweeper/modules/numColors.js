export function getColors() {
  const field = document.getElementById('field');

  const cells = new Audio();
  cells.src = '/assets/audio/cells.mp3';

  const flag = new Audio();
  flag.src = '/assets/audio/flag.mp3';
  flag.volume = '0.08';

  const bomb = new Audio();
  bomb.src = '/assets/audio/explosion.wav';
  bomb.volume = '0.08';

  const win = new Audio();
  win.src = '/assets/audio/win.mp3';

  const gameover = new Audio();
  gameover.src = '/assets/audio/gameover.mp3';

  field.addEventListener('click', (event) => {
    let btn = event.target.closest('button');
    if (btn) {
      if (btn.classList.contains('flag')) {
        return;
      }

      if (btn.classList.contains('bomb')) {
        btn.classList.add('open');
        btn.innerHTML = '<img src="./assets/icons/bomb4.png">';
        bomb.play();

        console.log('BOOOM! YOU LOOSE!');
      } else {
        btn.classList.add('open');
        btn.disabled = true;
        cells.play();

        if (btn.classList[1] == 0) {
          btn.innerHTML = '';
        } else {
          btn.innerHTML = `${btn.classList[1]}`;

          if (btn.classList[1] == 1) {
            btn.classList.add('blue');
          }

          if (btn.classList[1] == 2) {
            btn.classList.add('green');
          }

          if (btn.classList[1] == 3) {
            btn.classList.add('red');
          }

          if (btn.classList[1] == 4) {
            btn.classList.add('dark-blue');
          }

          if (btn.classList[1] == 5) {
            btn.classList.add('brown');
          }

          if (btn.classList[1] == 6) {
            btn.classList.add('cyan');
          }

          if (btn.classList[1] == 7) {
            btn.classList.add('black');
          }

          if (btn.classList[1] == 8) {
            btn.classList.add('grey');
          }
        }
      }
    }
  });

  field.addEventListener('contextmenu', (event) => {
    let btn = event.target.closest('button');

    event.preventDefault();

    if (!btn.classList.contains('open')) {
      if (btn) {
        if (!btn.classList.contains('flag')) {
          flag.play();
          btn.classList.add('flag');
          btn.innerHTML = '<img src="./assets/icons/redflag.png">';
        } else {
          btn.classList.remove('flag');
          btn.innerHTML = '';
        }
      }
    }
  });
}
