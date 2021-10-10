// Guess the Number Game

//
let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHigh = document.querySelector(".lowOrHigh");

const guess = document.querySelector(".guess");
const submit = document.querySelector(".submit");

let guessCount = 0;
let resetButton;
//
function checkGuess() {
  if (guessCount === 0) {
    guesses.textContent = "Previous Guesses:    ";
  }
  let userGuess = Number(guess.value);

  guessCount++;
  guess.value = "";
  guess.focus();
  guesses.textContent += userGuess + " ";

  if (userGuess === randomNumber) {
    lastResult.textContent = "Congratulations! You got the right number.";
    lastResult.style.backgroundColor = "green";
    lowOrHigh.textContent = "";

    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = "!!! Game Over !!!";
    lowOrHigh.textContent = "";

    setGameOver();
  } else {
    lastResult.textContent = "Wrong!";
    lastResult.style.backgroundColor = "red";
    if (userGuess < randomNumber) {
      lowOrHigh.textContent = "It's low";
    } else {
      lowOrHigh.textContent = "It's high";
    }
  }
}

submit.addEventListener("click", checkGuess);

function setGameOver() {
  guess.disabled = true;
  submit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Start new game.";
  document.body.append(resetButton);
  resetButton.addEventListener("click", resetGame);
}
function resetGame() {
  guessCount = 0;
  const resultParas = document.querySelectorAll(".resultParas p");
  for (let i = 0; i < resultParas.length; i++) {
    resultParas[i].textContent = "";
  }
  resetButton.parentNode.removeChild(resetButton);

  guess.disabled = false;
  submit.disabled = false;
  guess.textContent = "";
  guess.focus();

  lastresult.style.backgroundColor = white;
  randomNumber = Math.floor(Math.random() * 100) + 1;
}
