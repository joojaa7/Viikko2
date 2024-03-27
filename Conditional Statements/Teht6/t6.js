'use strict';

const number = +prompt("Anna luku.")
const table = document.querySelector("#id");

for (let i = 1; i <= number; i++){
  const tr = document.createElement("tr");
  for (let j = 1; j <= number; j++){
    const td = document.createElement("td");
    td.innerHTML = j * i;
    tr.appendChild(td);
  }
  document.querySelector("#id").appendChild(tr);
}

