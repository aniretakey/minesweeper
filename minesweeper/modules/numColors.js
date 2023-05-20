export function getColors() {
  const field = document.getElementById('field');
  field.addEventListener('click', (event) => {
    let btn = event.target.closest('button');
    console.log(btn.classList);
    if (btn.classList.contains('bomb')) {
      btn.classList.add('open');
      btn.innerHTML = '<img src="./assets/icons/bomb4.png">';
      console.log('BOOOM! YOU LOOSE!');
    } else {
      btn.classList.add('open');
      const bombCount = btn.classList[1];
      console.log(btn.classList[1]);

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
  });

  field.addEventListener('contextmenu', (event) => {
    let btn = event.target.closest('button');
    event.preventDefault();

    if (btn) {
      if (!btn.classList.contains('flag')) {
        btn.classList.add('flag');
        btn.innerHTML = '<img src="./assets/icons/redflag.png">';
      } else {
        btn.classList.remove('flag');
        btn.innerHTML = '';
      }
    }
  });
}
