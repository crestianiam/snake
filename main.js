
import { moveSnake } from "./logic/game.js";
import { gameState } from "./logic/gameState.js";
import { ctx } from "./logic/canvas.js";
import { drawSnake } from "./logic/drawing.js";

function startGame() {
    gameState.snake = [...gameState.snake];
    gameState.score = 0;
    gameState.isRunning = true;
    drawSnake(gameState.snake);
    console.log("Game started!");
}

document.getElementById('btn-start').addEventListener('click', startGame);
document.getElementById('btn-reset').addEventListener('click', startGame);

document.addEventListener('keydown', (event) => {
    if (!gameState.isRunning) return;

    switch (event.key) {
        case 'ArrowLeft':
            moveSnake("left", gameState.snake);
            break;
        case 'ArrowRight':
            moveSnake("right", gameState.snake);
            break;
        case 'ArrowUp':
            moveSnake("up", gameState.snake);
            break;
        case 'ArrowDown':
            moveSnake("down", gameState.snake);
            break;
        default:
            break;
    }
});

//check if canvas is available
if (!ctx) {
    console.error("2D context of canvas is not available");
} else {
    startGame()
}


