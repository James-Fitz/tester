/** Setting gloabal variables */
const playerChoices = document.getElementsByClassName("choice");
const resultText = document.getElementById("game-result");

let playerChoice;
let computerChoice;

let playerScore = parseInt(document.getElementById("player-score").innerHTML);
let computerScore = parseInt(document.getElementById("computer-score").innerHTML);

console.log(computerScore);

/** 
 * Creates an array of all possible choices
 * Generates a random number between 0 and 4
 * Return computer choice from the array */
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors", "lizard", "spock"];
    const randomChoice = Math.floor(Math.random() * 5)
    return choices[randomChoice];
}

/** 
 * Loop through all player choices.
 * Once the player clicks a choice
 * playGame function will run
 */
for (let choice of playerChoices) {
    choice.addEventListener('click', playGame);
}

/** Function that controls the flow of the game.
 * Console logs player choice and computer choice.
 * Runs the getResult function to determine the winner.
 */
function playGame(event) {
    playerChoice = event.target.id;
    computerChoice = getComputerChoice();
    console.log(`Player choice is ${playerChoice}`);
    console.log(`Computer choice is ${computerChoice}`);
    getResult();
}

/**
 * Function that determines the result of the player choice vs the computer choice.
 * Outputs resultTest to display to user who won.
 * Increases the score of the winner by one.
 * Runs the endGame function once the round result is determined.
 */
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
    console.log(playerScore);
    console.log(computerScore);
}

/**
 * Function to increase player score by one.
 */
function increasePlayerScore() {
    ++playerScore;
}

/**
 * Function to increase computer score by one.
 */
function increaseComputerScore() {
    ++computerScore;
}

/**
 *  Function to end the game when either player reaches 5 wins or computer reaches 5 wins.
 */
function endGame() {
    if (playerScore === 5) {
        console.log("player wins");
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        console.log("computer wins");
        playerScore = 0;
        computerScore = 0;
    }
}