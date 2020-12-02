let computerScore = 0;
let playerScore = 0;

function computerPlay() {
  const number = Math.floor(Math.random() * 3) + 1;
  if (number == 1) {
    return "rock";
  } else if (number == 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function score(game, playerScore, computerScore) {
  const score = document.querySelector(".score");
  if (game === 1) {
    score.textContent = `You win! Score: ${playerScore} to ${computerScore}`;
  } else if (game === 0) {
    score.textContent = `You lose! Score: ${playerScore} to ${computerScore}`;
  } else {
    score.textContent = `Its a draw!!! Score: ${playerScore} to ${computerScore}`;
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "scissors") {
    playerScore++;
    return score(1, playerScore, computerScore);
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    computerScore++;
    return score(0, playerScore, computerScore);
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    playerScore++;
    return score(1, playerScore, computerScore);
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    computerScore++;
    return score(0, playerScore, computerScore);
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    playerScore++;
    return score(1, playerScore, computerScore);
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    computerScore++;
    return score(0, playerScore, computerScore);
  } else {
    return score(2, playerScore, computerScore);
  }
}

let playerSelection = null;

function game() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      playerSelection = button.id;
      let computerSelection = computerPlay();
      // console.log(playerSelection, computerSelection);
      playRound(playerSelection, computerSelection);
    });
  });
}

game();
