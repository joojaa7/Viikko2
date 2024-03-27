'use strict';

const numbers = [1, 2, 3, 4, -5, 0, 233, 12310, 2, 33];

function sortArray(numbers){
  const sortedNumbers = numbers.sort((a, b) => a - b);
  return sortedNumbers;
}
console.log(numbers);
console.log(sortArray(numbers));
