"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Scrie un script pentru crearea și ștergerea unei colecții de elemente. Utilizatorul introduce numărul de elemente în input și dă click pe butonul Create, după care colecția este afișată în pagină. Când se face click pe butonul Destroy, colecția de elemente va fi ștearsă.

// Crează o funcție createBoxes(amount) care ia ca parametru un număr. Funcția va crea atâtea <div>-uri câte sunt specificate în amount și le va adăuga la div#boxes.

// Dimensiunile primului <div> vor fi 30px pe 30px.
// Fiecare element, cu excepția primului, ar trebui să fie cu 10px mai lat și mai înalt decât cel anterior.
// Toate elementele trebuie să aibă o culoare de fundal aleatoare în format HEX. Folosește funcția getRandomHexColor deja existentă pentru a obține o culoare.

// Scrie o funcție destroyBoxes() care va șterge conținutul div#boxes, ștergând astfel toate elementele create.

function createBoxes(amount) {
  let divHeigth = 30;
  let divWidth = 30;
  let divArr = [];

  for (let i = 1; i <= amount; i += 1) {
    const divColor = getRandomHexColor();

    const box = document.createElement("div");
    box.style.cssText = `height: ${divHeigth}px; 
     width: ${divWidth}px; 
     background-color: ${divColor}`;

    divArr.push(box);

    divHeigth += 10;
    divWidth += 10;
  }

  boxesEl.append(...divArr);
}

const inputEl = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesEl = document.querySelector("#boxes");

createBtn.addEventListener("click", () => createBoxes(inputEl.value));

destroyBtn.addEventListener("click", () => (boxesEl.innerHTML = ""));