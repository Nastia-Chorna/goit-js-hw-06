const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const itemEl = document.querySelector('#ingredients');

const listEl = ingredients.forEach((ingredient) => {

const itemListEl1 = document.createElement('li')
itemListEl1.classList.add('item')
itemListEl1.textContent = ingredient

itemEl.appendChild(itemListEl1);

})
console.log(itemEl);

