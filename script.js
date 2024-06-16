let score = 0;
let timeLeft = 10;
const box = document.getElementById('box');
const timeLeftSpan = document.getElementById('time-left');
const scoreSpan = document.getElementById('score');

function startGame() {
    box.style.display = 'block';
    moveBox();
    const gameInterval = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            timeLeftSpan.textContent = timeLeft;
        } else {
            clearInterval(gameInterval);
            endGame();
        }
    }, 1000);
}

function moveBox() {
    const gameArea = document.getElementById('game-area');
    const maxWidth = gameArea.clientWidth - box.clientWidth;
    const maxHeight = gameArea.clientHeight - box.clientHeight;
    const randomX = Math.floor(Math.random() * maxWidth);
    const randomY = Math.floor(Math.random() * maxHeight);
    box.style.left = `${randomX}px`;
    box.style.top = `${randomY}px`;
}

box.addEventListener('click', () => {
    score++;
    scoreSpan.textContent = score;
    moveBox();
});

function endGame() {
    box.style.display = 'none';
    alert(`Game Over! Your score is ${score}.`);
}

document.addEventListener('DOMContentLoaded', () => {
    startGame();
});
