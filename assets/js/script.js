/** Setting gloabal variables */
const playerChoices = document.getElementsByClassName("choice");
const resultText = document.getElementById("game-result");

let playerChoice;
let computerChoice;

let playerScore = document.getElementById("player-score");
let computerScore = document.getElementById("computer-score");

/** 
 * Creates an array of all possible choices
 * Generates a random number between 0 and 4
 * Return computer choice from the array */
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors", "lizard", "spock"];
    const randomChoice = Math.floor(Math.random() * 5)
    return choices[randomChoice];
}

for (let choice of playerChoices) {
    choice.addEventListener('click', playGame);
}

function playGame(event) {
    playerChoice = event.target.id;
    computerChoice = getComputerChoice();
    console.log(`Player choice is ${playerChoice}`);
    console.log(`Computer choice is ${computerChoice}`);
    getResult();
    
}

function getResult() {
    switch (playerChoice + computerChoice) {
        case 'rockscissors':
        case 'rocklizard':
        case 'paperrock':
        case 'paperspock':
        case 'scissorspaper':
        case 'scissorslizard':
        case 'lizardpaper':
        case 'lizardspock':
        case 'spockscissors':
        case 'spockrock':
            resultText.innerHTML = 'You Win The Round!';
            increasePlayerScore();
            break;
        case 'scissorsrock':
        case 'lizardrock':
        case 'rockpaper':
        case 'spockpaper':
        case 'paperscissors':
        case 'lizardscissors':
        case 'paperlizard':
        case 'spocklizard':
        case 'scissorsspock':
        case 'rockspock':
            resultText.innerHTML = 'Computer Wins The Round!';
            increaseComputerScore();
            break;
        default:
            resultText.innerHTML = 'Draw!';
            break;
    }
    endGame();
    console.log(playerScore.innerHTML);
    console.log(computerScore.innerHTML);
}

/**
 * Player score is incremented.
 */
 function increasePlayerScore() {
    ++playerScore.innerHTML;
}

/**
 * Computer score is incremented.
 */
function increaseComputerScore() {
    ++computerScore.innerHTML;
}

// The game finishes when the user or the pc gets to 10 points
function endGame() {
    if (parseInt(playerScore.innerHTML) === 5) {
        console.log("player wins");
        playerScore = 0;
        computerScore = 0; 
    }else if (parseInt(computerScore.innerHTML) === 5) {
        console.log("computer wins");
        playerScore = 0;
        computerScore = 0;
    }
}