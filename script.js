
function getComputerMove() {
    const num = Math.floor(Math.random() * 3);
    switch (num) {
        case 0: return 'rock';
        case 1: return 'paper';
        case 2: return 'scissors';
    }
}

function playRound(playerMove) {
    let computerMove = getComputerMove();
    let outcome = 'lose';
    if (playerMove == computerMove) {
        outcome = 'tie';
    } else if (playerMove == 'rock') {
        if (computerMove == 'scissors') {
            playerScore += 1;
            outcome = 'win';
        } else if (computerMove == 'paper') {
            computerScore += 1;
        }
    } else if (playerMove == 'paper') {
        if (computerMove == 'rock') {
            playerScore += 1;
            outcome = 'win';
        } else if (computerMove == 'scissors') {
            computerScore += 1;
        }
    } else if (playerMove == 'scissors') {
        if (computerMove == 'paper') {
            playerScore += 1;
            outcome = 'win';
        } else if (computerMove == 'rock') {
            computerScore += 1;
        }
    }

    if (outcome == 'win') msgElement.textContent = 'You Win!';
    else if (outcome == 'lose') msgElement.textContent = 'You Lose!';
    else if (outcome == 'tie') msgElement.textContent = "it's a tie!";
}

let playerScore = 0;
let computerScore = 0;
let gameFinished = false;
const playerScoreElement = document.querySelector('.player-score');
const computerScoreElement = document.querySelector('.computer-score');
const msgElement = document.querySelector('.msg');

function updateScores() {
    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;
}

function restartGame() {
    playerScore = 0;
    computerScore = 0;
    gameFinished = false;
    msgElement.textContent = "Game Restarted!!!";
    updateScores();
}

function buttonClicked(e) {
    if (gameFinished) {
        restartGame();
        return;
    }
    playRound(e.target.dataset['selection']);
    updateScores();
    if (playerScore >= 5) {
        msgElement.textContent = 'You Won the Game!!!';
        gameFinished = true;
    } else if (computerScore >= 5) {
        msgElement.textContent = 'You Lost the Game!!!';
        gameFinished = true;
    }
}

document.querySelectorAll('button').forEach(btn => btn.addEventListener('click', buttonClicked));