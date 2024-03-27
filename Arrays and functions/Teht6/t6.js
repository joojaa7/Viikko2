'use strict';

const ratings = [];
const iterations = +prompt("Montako elokuvaa arvioit?");

for (let i = 0; i < iterations; i++) {
  const name = prompt("Anna elokuvan nimi");
  const rating = +prompt("Anna arvosana");
  const movie = {
    'name' : name,
    'rating' : rating,
  };
  ratings.push(movie);
}

console.log(ratings);
const sortedRatings = ratings.sort((a, b) => b.rating - a.rating);
console.log(sortedRatings);

for (const rating of sortedRatings) {
  document.querySelector("#ratings").innerHTML += `<li>${rating.name}, ${rating.rating}</li>`;
}
