'use strict';

const numbers = [];

for (let i = 0; i < 5; i++) {
  numbers.push(+prompt("Anna numero."));
}

console.log(numbers);

const containsNumber = +prompt("Taskista listasta");
document.querySelector("#id").innerHTML = `Onko numbero listassa: ${numbers.includes(containsNumber)}`;
numbers.pop();
console.log(numbers);
numbers.sort((a, b) => a - b);
console.log(numbers);

