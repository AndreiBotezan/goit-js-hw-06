"use strict";
// Scrie un script care, atunci când focalizarea este pierdută de pe un input (evenimentul blur), verifică dacă numărul de caractere introduse este corect.

// Numărul de caractere admis trebuie specificat în atributul data-length.
// Dacă este introdus numărul corect de caractere, atunci border-ul devine verde, în caz contrar - roșu.
// Pentru a adăuga stilurile necesare, utilizați clasele CSS valid și invalid pe care le-am adăugat deja la fișierele sursă ale acestui exercițiu.

const inputEl = document.querySelector('#validation-input');
const dataLen = Number(inputEl.getAttribute('data-length'));

inputEl.addEventListener("blur", (e) => {
  // console.log(e.currentTarget.value.length);
  // console.log(dataLen);

  if (e.currentTarget.value.length == dataLen) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
});