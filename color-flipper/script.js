"use strict";

const colors = ["green", "red", "rgb(133, 122, 200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

function getRandomNumber() {
  return Math.trunc(Math.random() * colors.length);
}

btn.addEventListener("click", function () {
  //get random number between 0 -3
  const randonNum = getRandomNumber();
  //console.log(randonNum);

  document.body.style.background = colors[randonNum];
  color.textContent = colors[randonNum];
});
