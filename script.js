function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex]
}

console.log(getComputerChoice());

function getHumanChoice() {
    const choice = prompt("Please enter rock, paper, or scissors:").toLowerCase();
    if (["rock", "paper", "scissors"].includes(choice)) {
        return choice;
    } else {
        console.log("Invalid choice, please try again");
        return getHumanChoice();
    }
}

console.log(getComputerChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissor" && computerChoice === "paper")
    ) {
        humanScore++;
        console.log('You win! ${compuerChoice} beats ${humanChoice}.');
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);


function playGame() {
    humanScore = 0;
    computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const compterSelection = getComputerChoice();
        playRound(humanSelection, compterSelection);
    }

    if (humanScore > computerScore) {
        console.log('Conmgratulations! You won the game with a score of ${humanScore} to ${computerScore}.');
    } else if (computerScore > humanScore) {
        console.log('Sorry, you lost the game. Tha score was ${computerScore} to ${humanScore}.');
    } else {
        console.log("The game is a tie!");
    }
}

playGame();