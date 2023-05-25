export function createMarkup() {
  let body = document.getElementsByTagName('body')[0];

  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');

  const title = document.createElement('h1');
  title.classList.add('title');
  title.innerHTML = 'Minesweeper';

  const menu = document.createElement('div');
  menu.classList.add('menu');

  const menuItem1 = document.createElement('button');
  menuItem1.classList = 'menu_item score';
  menuItem1.innerHTML = 'Score';

  const menuItem2 = document.createElement('button');
  menuItem2.classList = 'menu_item difficult';
  menuItem2.innerHTML = `Bombs: <input type="number" name="bombsCount" id="bombsInput" min="10" max="99" placeholder="10" value="${localStorage.bombsCount}">`;

  const menuItem4 = document.createElement('button');
  menuItem4.classList = 'menu_item theme';
  menuItem4.innerHTML = 'Theme';

  const menuItem3 = document.createElement('button');
  menuItem3.classList = 'menu_item restart';
  menuItem3.innerHTML = 'Restart';

  const menuItem5 = document.createElement('button');
  menuItem5.classList = 'menu_item timer';
  menuItem5.innerHTML = 'Time: 0';

  const menuItem6 = document.createElement('button');
  menuItem6.classList = 'menu_item moves';
  menuItem6.innerHTML = 'Moves: 0';

  const menuItem7 = document.createElement('button');
  menuItem7.classList = 'menu_item flags';
  menuItem7.innerHTML = 'Flags: 0';

  const menuItem8 = document.createElement('button');
  menuItem8.classList = 'menu_item sound sound_on';
  if ((localStorage.soundOn = 'true')) {
    menuItem8.innerHTML = '<img src="./assets/icons/sound-on.png">';
  } else {
    menuItem8.innerHTML = '<img src="./assets/icons/sound-off.png">';
  }

  const field = document.createElement('div');
  field.classList.add('field');
  field.id = 'field';

  menu.append(
    menuItem1,
    menuItem2,
    menuItem4,
    menuItem3,
    menuItem8,
    menuItem5,
    menuItem7,
    menuItem6
  );
  wrapper.append(title, menu, field);
  body.append(wrapper);
}
