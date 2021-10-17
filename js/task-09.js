
const changeColorEl = document.querySelector('.change-color');
const span = document.querySelector('.color');
const bodyEl = document.querySelector('body');
changeColorEl.addEventListener('click', changeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function changeColor () {
  const color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
  span.textContent = color;
}

