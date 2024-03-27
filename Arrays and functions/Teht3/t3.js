'use strict';

const numbers = [];
let input = "";

do {
  input = +prompt("Anna numero. Jätä tyhjäksi lopettaaksesi");
  if (input != "") {
    numbers.push(input);
  }
} while (input != "");

for (const number of numbers) {
  if (number % 2 == 0){
    const p = document.createElement("p");
    p.innerHTML = number;
    document.querySelector("body").appendChild(p);
  }
}
