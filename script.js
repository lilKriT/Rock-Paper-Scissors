const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");

const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length);
  console.log(randomNumber);

  if (randomNumber === 0) {
    computerChoice = "rock";
  } else if (randomNumber === 1) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "draw";
  } else if (
    (computerChoice === "rock" && userChoice === "paper") ||
    (computerChoice === "paper" && userChoice === "scissors") ||
    (computerChoice === "scissors" && userChoice === "rock")
  ) {
    result = "you win!";
  } else {
    result = "you lose :(";
  }
  resultDisplay.innerHTML = result;
}
