"use strict";

const fruits = ["apple", "banana", "orange", " grape", "kiwi"];

for (const fruit of fruits) {
  console.log(fruit);
}

document.querySelector("#id").innerHTML = `Lenght of fruits: ${fruits.length}`;
console.log(fruits[2]);
console.log(fruits[fruits.length-1])
const vegetables = [];

for (let i = 0; i < 3; i++) {
  let veg = prompt("Lisää vihannes.");
  vegetables.push(veg);
}

document.querySelector("#veg").innerHTML = `Lenght of vegetables: ${vegetables.length}`;
