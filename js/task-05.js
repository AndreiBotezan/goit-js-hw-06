'use strict';
// Scrie un script care, atunci când se introduce un text în input#name-input (evenimentul input), înlocuiește valoarea lui span#name-output cu valoarea curentă din input#name-input. Dacă input-ul este gol, în acel span se va afișa "Anonymous".

const nameInputEl = document.querySelector('#name-input');
const nameOutputEl = document.querySelector('#name-output');

nameInputEl.addEventListener('input', (e) => {
  if(e.currentTarget.value != "") {
    nameOutputEl.textContent = e.currentTarget.value;
  } else {
    nameOutputEl.textContent = "Anonymous";
  }
})