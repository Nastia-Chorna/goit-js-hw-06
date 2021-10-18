const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const itemEl = document.querySelector('#ingredients');

const markup = (item) => {
  const element = document.createElement('li');
  element.textContent = item;
  return element;
}
const createMarkUp = ingredients.map(markup);
itemEl.append(...createMarkUp);

