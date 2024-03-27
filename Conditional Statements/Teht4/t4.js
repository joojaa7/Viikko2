"use strict";


const score = +prompt("Anna pistemäärä");
let grade;

if (score <= 39){
  grade = 0;
}
else if (score <= 51){
  grade = 1;
}
else if (score <= 63){
  grade = 2;
}
else if (score <= 75){
  grade = 3;
}
else if (score <= 87){
  grade = 4;
}
else {
  grade = 5;
}



document.querySelector("#id").innerHTML = `Arvosana on ${grade}.33`;
