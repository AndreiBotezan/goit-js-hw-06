'use strict';
// Counter-ul este format dintr-un tag span și două butoane care, atunci când sunt apăsate, ar trebui să-și mărească sau scadă valoarea cu unu.

// Declară o variabilă counterValue ce va stoca valoarea curentă a contorului și asignează-i valoarea 0 pentru început.
// Adaugă click handler pe butoane, în interiorul cărora vei mări sau micșora valoarea contorului.
// Actualizează interfața cu noua valoare a variabilei counterValue.

let counterVal = 0;

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector("#value");

decrementBtn.addEventListener('click', () => {
  counterVal -= 1;
  valueEl.textContent = counterVal;
});

incrementBtn.addEventListener('click', () => {
  counterVal += 1;
  valueEl.textContent = counterVal;
});