"use strict";

const number = +prompt("Anna positiivinen luku");
let answer = 0;
for (let i = 1; i <= number; i++){
  answer += i;
}
if (number < 0){
  answer = "Antamasi luku on negatiivinen.";
}

document.querySelector("#id").innerHTML = answer;
