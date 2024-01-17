"use strict";

let random_num = Math.floor(Math.random() * 20 + 1);
let score = Number(document.querySelector(".score").textContent);
let default_highscore = 0;

/*
    function for changing the message type
*/
const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  let guessed_num = Number(document.querySelector(".guess").value); //input value from the user

  if (guessed_num == 0 || guessed_num > 20) {
    displayMessage("Please insert a valid number. NUMBERS BETWEEN 1 AND 20!!");
  } else if (random_num === guessed_num) {
    displayMessage("you won!!");
    document.querySelector(".score").textContent = `${score++}`;

    if (score >= default_highscore) {
      default_highscore = score; //setting the high score
      document.querySelector(".highscore").textContent = `${default_highscore}`;
    }
    document.querySelector("body").style.backgroundColor = "#60b347";
  } else if (guessed_num !== random_num) {
    displayMessage("try again");
    if (score > 1) {
      displayMessage(guessed_num > random_num ? "Too high!" : "Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("Sorry, You lost the game!");
      document.querySelector("body").style.backgroundColor = "red";
      document.querySelector(".number").style.width = "30rem";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 10;
  random_num = Math.floor(Math.random() * 20) + 1;

  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;

  document.querySelector(".guess").value = "";

  document.body.style.backgroundColor = "#222222";
});
