export let results = [];

export function setNewResult(clicksCount = 0, seconds = 0) {
  const newResult = {
    data: '',
    moves: '',
    time: ''
  };

  let newDate = new Date().toLocaleString();

  newResult.data = newDate;
  newResult.moves = clicksCount;
  newResult.time = seconds;

  let results = JSON.parse(localStorage.results);

  if (results.length >= 10) {
    results = results.slice(1);
  }

  results = [...results, newResult];
  localStorage.results = JSON.stringify(results);
  return newResult;
}

export function setFirstResults() {
  let results = [];
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

  if (!localStorage.results) {
    localStorage.results = JSON.stringify(zeroResults);
  }
}
