'use strict';
// Scrie un script care:

// Va număra și printa în consolă numărul total de categorii din ul#categories, adică elementele li.item.
// Pentru fiecare element li.item din lista ul#categories, va găsi și printa în consolă titlul elementului (tag-ul <h2>) și numărul de elemente din acea categorie (toate elementele <li>).
// Ca rezultat, în consolă vor fi afișate astfel de mesaje:

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const categoriesEl = document.querySelector('#categories');
const catArr = categoriesEl.children;
console.log(`Number of categories: ${catArr.length}`);

[...catArr].forEach((el) => {
  const cat = el.firstElementChild.textContent;
  const subcatLength = el.lastElementChild.children.length;
  console.log(
  `
  Category: ${cat}
  Elements: ${subcatLength}`
  );
});
