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
  menuItem1.innerHTML = 'Score🏆🏅';

  const menuItem2 = document.createElement('button');
  menuItem2.classList = 'menu_item difficult';
  menuItem2.innerHTML = 'Difficult📈';

  const menuItem3 = document.createElement('button');
  menuItem3.classList = 'menu_item restart';
  menuItem3.innerHTML = 'Restart ⭯🔄';

  const menuItem4 = document.createElement('button');
  menuItem4.classList = 'menu_item theme';
  menuItem4.innerHTML = 'Theme⚫⚪';

  const field = document.createElement('div');
  field.classList.add('field');
  field.id = 'field';

  menu.append(menuItem1, menuItem2, menuItem3, menuItem4);
  wrapper.append(title, menu, field);
  body.append(wrapper);
}
