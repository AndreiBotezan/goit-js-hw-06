"use strict";
// Scrie un script care răspunde la modificarea valorii din input#font-size-control (evenimentul input) și modifică stilurile inline al span#text prin actualizarea proprietății font-size. Ca rezultat, atunci când glisați scrollbar-ul, dimensiunea textului se va schimba.

const fontControlEl = document.querySelector('#font-size-control');
const textEl = document.querySelector("#text");

textEl.style.fontSize = `${fontControlEl.value}px`;

fontControlEl.addEventListener('input', (e) => {
  textEl.style.fontSize = `${fontControlEl.value}px`;
})