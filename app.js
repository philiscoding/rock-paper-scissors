// PSEUDOCODE STUFF
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
            return "scissors";
            break;
        default:
            return "error!";
    }
}

//PLAYS ROUND AND RETURNS WIN/LOSE
function playRound(playerSelection, computerSelection) {

    // CASE INSENSITIVE
    playerSelection = playerSelection.toString().toLowerCase();

    if (playerSelection === computerSelection) {
        return "Draw!";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return "Lose!";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "Win!";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "Lose!";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return "Win!";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "Lose!";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "Win!";
    }
}

// PLAY OUT 5 ROUNDS AND DETERMINE WINNER
function game() {

    //TRACK SCORES
    let playerCount = 0;
    let computerCount = 0;

    //PLAY 5 ROUNDS
    for (let i = 0; i < 5; i++) {

        playerSelection = prompt("What do you select?");
        let currentRound = playRound(playerSelection, computerPlay());
        console.log(currentRound);
        if (currentRound == "Win!") {
            playerCount = playerCount + 1;

        } else if (currentRound == "Lose!") {
            computerCount = computerCount + 1;

        } else if (currentRound == "Draw!") {
            i--
            playerSelection = prompt("What do you select?");
            currentRound = playRound(playerSelection, computerPlay());
        }
    }

    //PRINT WINNER
    let result = "";
    if (playerCount > computerCount) {
        result = "You win! Computer loses.";
    } else result = "You lose! Computer wins.";

    return result;
}