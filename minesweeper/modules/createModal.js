import { clicksCount } from './openCells.js';
import { newGame } from '../index.js';
import { seconds, interval } from './timer.js';

function createModalMarkup(type) {
  const background = document.createElement('div');
  background.classList.add('modal__background');
  background.id = 'modal__background';

  const window = document.createElement('div');
  window.classList.add('modal__window');

  if (type == 'win') {
    window.innerHTML = `Hooray! You win!🙂
    You found all mines in  ${seconds} seconds and ${clicksCount} moves!`;
  } else if (type == 'loose') {
    window.innerHTML = `Game over.
    Try again 🙁`;
  } else if (type == 'results') {
    let results = JSON.parse(localStorage.results);

    let resultsTable = `<h4>Results</h4>
    <table class="table">
    	<tbody>
        <tr>
    			<th>№</th>
    			<th>Date</th>
    			<th>Moves</th>
    			<th>Time</th>
    		</tr>
    		<tr>
    			<td>1</td>
    			<td>${results[9].data}</td>
    			<td>${results[9].moves}</td>
    			<td>${results[9].time}</td>
    		</tr>
    		<tr>
    			<td>2</td>
    			<td>${results[8].data}</td>
    			<td>${results[8].moves}</td>
    			<td>${results[8].time}</td>
    		</tr>
    		<tr>
    			<td>3</td>
    			<td>${results[7].data}</td>
    			<td>${results[7].moves}</td>
    			<td>${results[7].time}</td>
    		</tr>
    		<tr>
    			<td>4</td>
    			<td>${results[6].data}</td>
    			<td>${results[6].moves}</td>
    			<td>${results[6].time}</td>
    		</tr>
    		<tr>
    			<td>5</td>
    			<td>${results[5].data}</td>
    			<td>${results[5].moves}</td>
    			<td>${results[5].time}</td>
    		</tr>
    		<tr>
    			<td>6</td>
    			<td>${results[4].data}</td>
    			<td>${results[4].moves}</td>
    			<td>${results[4].time}</td>
    		</tr>
    		<tr>
    			<td>7</td>
    			<td>${results[3].data}</td>
    			<td>${results[3].moves}</td>
    			<td>${results[3].time}</td>
    		</tr>
    		<tr>
    			<td>8</td>
    			<td>${results[2].data}</td>
    			<td>${results[2].moves}</td>
    			<td>${results[2].time}</td>
    		</tr>
    		<tr>
    			<td>9</td>
    			<td>${results[1].data}</td>
    			<td>${results[1].moves}</td>
    			<td>${results[1].time}</td>
    		</tr>
    		<tr>
    			<td>10</td>
    			<td>${results[0].data}</td>
    			<td>${results[0].moves}</td>
    			<td>${results[0].time}</td>
    		</tr>
    	</tbody>
    </table>`;

    window.innerHTML = resultsTable;
  }

  const close = document.createElement('div');
  close.classList.add('modal__close');

  const cross = document.createElement('img');
  cross.classList.add('modal__cross');
  cross.src = './assets/icons/cross.png';

  close.append(cross);
  window.append(close);
  background.append(window);

  const wrapper = document.querySelector('.wrapper');
  wrapper.append(background);
}

export function createModal(win) {
  createModalMarkup(win);
  const body = document.getElementsByTagName('body')[0];
  const wrapper = document.querySelector('.modal__background');
  const btnClose = document.querySelector('.modal__close');

  wrapper.classList.add('modal__open');

  btnClose.addEventListener('click', function () {
    wrapper.classList.remove('modal__open');
    body.innerHTML = '';
    clearInterval(interval);
    newGame();
  });

  wrapper.addEventListener('click', function (event) {
    if (event.target === wrapper) {
      wrapper.classList.remove('modal__open');
      body.innerHTML = '';
      clearInterval(interval);
      newGame();
    }
  });
}
