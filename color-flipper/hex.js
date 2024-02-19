"use strict";
const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");
function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
btn.addEventListener("click", function () {
  let colorHex = "#";
  for (let i = 0; i < 6; i++) {
    colorHex += hex[getRandomNumber()];
  }
  console.log(colorHex);
  document.body.style.background = colorHex;
  color.textContent = colorHex;
});
