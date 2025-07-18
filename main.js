
import { moveSnake } from "./logic/game.js";
import { gameState, resetState } from "./logic/gameState.js";
import { ctx } from "./logic/canvas.js";
import { drawFood, createRandomSnake, drawSnake, clearCanvas, drawText } from "./logic/drawing.js";
import { STARTING_SCORE, LABEL_GAME_STARTED, LABEL_GAME_OVER, LABEL_TOTAL_SCORE, STARTING_SPEED } from "./logic/config.js";
import { getRandomAvailablePoint, getRandomStringDirection, isOppositeDirection } from "./logic/utility.js";

let gameInterval = null;

function startGameLoop() {
    if (gameInterval) {
        clearInterval(gameInterval);
    }

    gameInterval = setInterval(() => {
        if (gameState.isRunning && gameState.currentDirection) {
            moveSnake();
            console.log(gameState.currentDirection)
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
    clearCanvas();

    gameState.score = STARTING_SCORE;
    gameState.isRunning = true;
    gameState.snake = createRandomSnake(1);
    gameState.food = getRandomAvailablePoint(gameState.snake);
    gameState.speed = STARTING_SPEED;
    gameState.currentDirection = getRandomStringDirection();

    drawSnake(gameState.snake);
    drawFood(gameState.food);

    startGameLoop();

    console.log(LABEL_GAME_STARTED);
}

export function gameOver() {
    clearCanvas();
    const finalScore = gameState.score;
    stopGameLoop();
    resetState();
    drawText([LABEL_GAME_OVER.toUpperCase(), `${LABEL_TOTAL_SCORE.toUpperCase()}: ${finalScore}`]);
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
    if (newDirection && (gameState.snake.length === 1 || !isOppositeDirection(newDirection, gameState.currentDirection))) {
        gameState.currentDirection = newDirection;
    }
});

//check if canvas is available
if (!ctx) {
    console.error("2D context of canvas is not available");
} else {
    //todo actually replace with dashboard when implemented
    startGame();
}


