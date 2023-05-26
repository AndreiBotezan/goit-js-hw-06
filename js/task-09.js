"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// // Scrie un script care schimbă culorile de fundal al elementului <body> prin stiluri inline atunci când se face click pe button.change-color și afișează valoarea culorii în span.color.
// Pentru a genera o culoare aleatorie, folosește getRandomHexColor.

const body = document.querySelector("body");
const btnEl = document.querySelector(".change-color");
let span = document.querySelector(".color");

btnEl.addEventListener("click", () => {
  const currentColor = getRandomHexColor();
  body.style.backgroundColor = currentColor;
  span.textContent = `${currentColor}`;
});
