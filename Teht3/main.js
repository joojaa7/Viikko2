const side1 = +prompt("Sivu1");
const side2 = +prompt("Sivu2");
const side3 = +prompt("Sivu3");
let answer;


if (side1 === side2 && side2 === side3 && side1 === side3){
  answer = "Equilateral";
}
else if (side1 === side2 && side2 != side3 || side1 != side2 && side2 === side3 || side1 === side3 && side2 != side3){
  answer = "Isoleces";
}
else {
  answer = "None are equal.";
}

document.querySelector('#id').innerHTML = answer;
