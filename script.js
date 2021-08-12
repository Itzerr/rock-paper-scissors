
function computerPlay() {
    // integer between 0 and 2;
    const num = Math.floor(Math.random() * 3);
    switch (num) {
        case 0: return 'Rock';
        case 1: return 'Paper';
        case 2: return 'Scissors';
    }
}

function roundPlay(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    let score = 0;
    let msg = '';
    if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            msg = 'Paper beats Rock';
            score = -1;
        } else if (computerSelection == 'scissors') {
            msg = 'Rock beats Scissors';
            score = 1;
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            msg = 'Paper beats Rock';
            score = 1;
        } else if (computerSelection == 'scissors') {
            msg = 'Scissors beat Paper';
            score = -1;
        }
    } else if (playerSelection == 'scissors') {
        if (computerSelection == 'paper') {
            msg = 'Scissors beat Paper';
            score = 1;
        } else if (computerSelection == 'rock') {
            msg = 'Rock beats Scissors';
            score = -1;
        }
    }

    return [msg, score];
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Rock, Paper or Scissors. What do you pick?');
        const computerSelection = computerPlay();
        const [msg, roundScore] = roundPlay(playerSelection, computerSelection);
        if (roundScore == -1) {
            console.log('You Lose this round! ' + msg);
            computerScore += 1;
        } else if (roundScore == 0) {
            console.log("No one wins this round!");
        } else if (roundScore == 1) {
            console.log('You Won this round! ' + msg);
            playerScore += 1;
        }
    }

    console.log('Player Score: ' + playerScore);
    console.log('Computer Score: ' + computerScore);

    if (playerScore === computerScore) {
        console.log('This game is a tie!');
    } else if (playerScore > computerScore) {
        console.log('You Won this game!');
    } else if (playerScore < computerScore) {
        console.log('You Lost this game!');
    }
}

game();