"use strict";

/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "🎉 Correct Number";
console.log(document.querySelector(".message").textContent);

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;
document.querySelector(".guess").value = 20;
console.log(document.querySelector(".guess").value);
*/

let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

//Refactoring technique
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // console.log(typeof guess, guess);

  //When there is no input
  if (!guess) {
    // document.querySelector(".message").textContent = "⛔ No number!";
    displayMessage("⛔ No number!");
  }

  // When the user wins
  else if (guess === secretNumber) {
    // document.querySelector(".message").textContent = "🎉 Correct Number";
    displayMessage("🎉 Correct Number");

    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }
  //When guess is wrong
  else if (guess !== secretNumber) {
    // document.querySelector(".message").textContent =
    //   guess > secretNumber ? "📈Too High" : "📉 Too Low";
    displayMessage(guess > secretNumber ? "📈Too High" : "📉 Too Low");
    if (score > 1) {
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector(".message").textContent = "💥 You lost the game";
      displayMessage("💥 You lost the game");
      document.querySelector(".score").textContent = 0;
    }
  }

  //I used the refactoring technique to reduce the code by using the ternary operator

  //When the guess is High
  /*else if (guess > secretNumber) {
    document.querySelector(".message").textContent = "📈Too High";
    if (score > 1) {
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 You lost the game";
      document.querySelector(".score").textContent = 0;
    }
  }
  //When the guess is Low
  else if (guess < secretNumber) {
    document.querySelector(".message").textContent = "📉 Too Low";
    if (score > 1) {
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 You lost the game";
      document.querySelector(".score").textContent = 0;
    }
  }*/
});

// Game reset functionality
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  //Restoring the score variable
  document.querySelector(".score").textContent = score;

  //Restoring the number variable and width
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";

  //Restoring the score text
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  //Restore the message text
  // document.querySelector(".message").textContent = "Guessing the number...";
  displayMessage("Start guessing...");

  //Restoring the background color
  document.querySelector("body").style.backgroundColor = "#222";

  //Restoring the input field
  document.querySelector(".guess").value = "";
});
