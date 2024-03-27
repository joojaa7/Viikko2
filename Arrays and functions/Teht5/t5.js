'use strict';

const numbers = [1, 2, 3, 4, -5, 0, 233, 12310, 2, 33];

function sortArray(numbers, order){
  let sortedNumbers = [];
  if (order === "desc") {
    sortedNumbers = numbers.sort((a, b) => b - a);
  }
  if (order === "asc") {
    sortedNumbers = numbers.sort((a, b) => a - b);
  }
  return sortedNumbers;
}

console.log("Desceding: " + sortArray(numbers, "desc"));
console.log("Ascending: " + sortArray(numbers, "asc"));
