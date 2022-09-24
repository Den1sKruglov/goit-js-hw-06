const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const createNewEl = ingredients.map(element => {
  console.log(element);
  const newEl = document.createElement('li');
  newEl.textContent = element;
  newEl.classList.add('item');

  return newEl;

});

const getElingredient = document.querySelector('#ingredients').append(...createNewEl);
