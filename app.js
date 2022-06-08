// INITIALIZE RANDOM NUMBER FUNCTION WITH RANGE
function random(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
}

//RANDOM ROCK PAPER SCISSOR
function computerPlay() {

    // 1 === ROCK, 2 === PAPER , 3 === SCISSORS
    switch (random(1, 3)) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissor";
            break;
        default:
            return "error!";
    }
}

//PLAYS ROUND AND RETURNS WIN/LOSE
function playRound(playerSelection, computerSelection) {

    // CASE INSENSITIVE


    if (playerSelection === computerSelection) {
        return "Draw!";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return "Lose!";
    } else if (playerSelection == "rock" && computerSelection == "scissor") {
        return "Win!";
    } else if (playerSelection == "paper" && computerSelection == "scissor") {
        return "Lose!";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return "Win!";
    } else if (playerSelection == "scissor" && computerSelection == "rock") {
        return "Lose!";
    } else if (playerSelection == "scissor" && computerSelection == "paper") {
        return "Win!";
    }
}




const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorButton = document.querySelector(".scissor");

rockButton.addEventListener("click", () => console.log(updateScore(rockButton)));
paperButton.addEventListener("click", () => console.log(updateScore(paperButton)));
scissorButton.addEventListener("click", () => console.log(updateScore(scissorButton)));

const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");
const roundScore = document.querySelector(".round-score");
let playerScoreCount = 0;
let computerScoreCount = 0;
let roundScoreCount = 0;

function updateScore(clickedButton) {

    let result = playRound(clickedButton.className, computerPlay());
    console.log(result);
    if (result == "Win!") {
        playerScoreCount = playerScoreCount + 1;
        playerScore.textContent = `${playerScoreCount}`;
        roundScoreCount = roundScoreCount + 1;
        roundScore.textContent = `${roundScoreCount}`
    } else if (result == "Lose!") {
        computerScoreCount = computerScoreCount + 1;
        computerScore.textContent = `${computerScoreCount}`;
        roundScoreCount = roundScoreCount + 1;
        roundScore.textContent = `${roundScoreCount}`
    } else {
        alert("DRAW!");
    }
    if (roundScoreCount === 5) {
        if (playerScoreCount > computerScoreCount) {
            alert("You win!");
        } else {
            alert("Computer wins!");
        }
        window.location.reload()
    }
}