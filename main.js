
import { moveSnake, updateBoard } from "./logic/game.js";
import { gameState, resetState, STARTING_SCORE, STARTING_SPEED } from "./logic/gameState.js";
import { ctx } from "./logic/canvas.js";
import { clearCanvas, drawDashboard, drawText } from "./logic/drawing.js";
import { LABEL_GAME_STARTED, LABEL_GAME_OVER, LABEL_TOTAL_SCORE, LABEL_GAME_WIN } from "./utils/config.js";
import { getRandomAvailablePoint, getRandomStringDirection, isOppositeDirection } from "./utils/helperFunctions.js";
import { playCollisionSound, playVictorySound } from "./utils/audio.js";

let gameInterval = null;

function startGameLoop() {
    if (gameInterval) {
        clearInterval(gameInterval);
    }

    gameInterval = setInterval(() => {
        if (gameState.isRunning && gameState.currentDirection) {
            moveSnake();
        }
    }, gameState.speed);
}

function stopGameLoop() {
    if (gameInterval) {
        clearInterval(gameInterval);
        gameInterval = null;
    }
}

function startGame() {
    //drawDashboard();
    gameState.score = STARTING_SCORE;
    gameState.isRunning = true;
    //remind throw non handled, no need on empty board
    gameState.snake = [getRandomAvailablePoint()];
    gameState.food = getRandomAvailablePoint(gameState.snake);
    gameState.speed = STARTING_SPEED;
    gameState.currentDirection = getRandomStringDirection();
    gameState.nextDirection = null;

    updateBoard();
    startGameLoop();

    console.log(LABEL_GAME_STARTED);
}

export function gameOver() {
    const finalScore = gameState.score;
    playCollisionSound();
    clearCanvas();
    stopGameLoop();
    resetState();
    drawText([LABEL_GAME_OVER.toUpperCase(), `${LABEL_TOTAL_SCORE.toUpperCase()}: ${finalScore}`]);
}

export function victory() {
    const finalScore = gameState.score;
    playVictorySound();
    clearCanvas();
    stopGameLoop();
    resetState();
    drawText([LABEL_GAME_WIN.toUpperCase(), `${LABEL_TOTAL_SCORE.toUpperCase()}: ${finalScore}`]);
}

document.getElementById('btn-start').addEventListener('click', startGame);
//todo new button reset and show dashboard, not implmented the html yet
document.getElementById('btn-reset').addEventListener('click', startGame);

document.addEventListener('keydown', (event) => {
    if (!gameState.isRunning) return;

    let newDirection = null;
    switch (event.key) {
        case 'ArrowLeft':
            newDirection = "left";
            break;
        case 'ArrowRight':
            newDirection = "right";
            break;
        case 'ArrowUp':
            newDirection = "up";
            break;
        case 'ArrowDown':
            newDirection = "down";
            break;
        default:
            break;
    }
    if (newDirection &&
        //prevent going backwards if snake has more than one segments
        (gameState.snake.length === 1 || !isOppositeDirection(newDirection, gameState.currentDirection))) {
        gameState.nextDirection = newDirection;
    }
    //moveSnake(newDirection)
});

//check if canvas is available
if (!ctx) {
    console.error("2D context of canvas is not available");
} else {
    //todo actually replace with dashboard when implemented
    startGame();
}


