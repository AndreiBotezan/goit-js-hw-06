'use strict';
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Scrie un script care pentru fiecare element al matricei ingredients:

// Va crea un element <li> separat. Asigură-te că folosești metoda document.createElement().
// Adaugă numele ingredientului ca conținut text.
// Adaugă clasa item la element.
// Apoi va insera toate elementele <li> dintr-o singură operație în lista ul#ingredients.

const ulArr = [];

ingredients.forEach(el => {
  const listItem = document.createElement('li');
  listItem.textContent = el;
  ulArr.push(listItem);
});

const targetUl = document.querySelector("#ingredients");
targetUl.append(...ulArr);