const x1 = +prompt("Anna x1 arvo");
const x2 = +prompt("Anna x2 arvo");
const y1 = +prompt("Anna y1 arvo");
const y2 = +prompt("Anna y2 arvo");
const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
console.log(distance)
document.querySelector('#id').innerHTML = distance;
