const gray = document.getElementById('gray');
const white = document.getElementById('white');
const blue = document.getElementById('blue');
const yellow = document.getElementById('yellow');

gray.addEventListener('click', () => {
  document.body.style.backgroundColor = 'gray';
});

white.addEventListener('click', () => {
  document.body.style.backgroundColor = 'white';
});

blue.addEventListener('click', () => {
  document.body.style.backgroundColor = 'blue';
});

yellow.addEventListener('click', () => {
  document.body.style.backgroundColor = 'yellow';
});