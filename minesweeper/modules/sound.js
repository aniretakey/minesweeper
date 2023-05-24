export function soundOn() {
  let soundBtn = document.querySelector('.sound');

  soundBtn.addEventListener('click', () => {
    let soundStatus = localStorage.soundOn;

    if (soundStatus == 'false') {
      localStorage.setItem('soundOn', 'true');
      soundBtn.innerHTML = '<img src="./assets/icons/sound-on.png">';
    } else {
      localStorage.setItem('soundOn', 'false');
      soundBtn.innerHTML = '<img src="./assets/icons/sound-off.png">';
    }
  });
}
