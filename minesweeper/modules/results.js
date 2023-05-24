export let results = [];

export function setNewResult(clicksCount, seconds) {
  const newResult = {
    data: '',
    moves: '',
    time: ''
  };

  let newDate = new Date().toLocaleString();

  newResult.data = newDate;
  newResult.moves = clicksCount;
  newResult.time = seconds;

  let zeroResults = [
    { data: '', moves: '', time: '' },
    { data: '', moves: '', time: '' },
    { data: '', moves: '', time: '' },
    { data: '', moves: '', time: '' },
    { data: '', moves: '', time: '' },
    { data: '', moves: '', time: '' },
    { data: '', moves: '', time: '' },
    { data: '', moves: '', time: '' },
    { data: '', moves: '', time: '' },
    { data: '', moves: '', time: '' }
  ];

  if (localStorage.results) {
    results = JSON.parse(localStorage.results);
  } else {
    results = zeroResults;
  }

  if (results.length >= 10) {
    results = results.slice(1);
  }

  results = [...results, newResult];
  localStorage.results = JSON.stringify(results);
  return newResult;
}
