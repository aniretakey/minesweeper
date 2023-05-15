export function changeTheme() {
  const btn = document.getElementsByClassName('theme')[0];
  btn.addEventListener('click', (event) => {
    const body = document.getElementsByTagName('body')[0];

    if (event.target.classList.contains('theme')) {
      body.classList.toggle('dark');
    }
  });
}
