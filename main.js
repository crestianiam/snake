
import { moveSnake } from "./logic/game.js";
import { gameState } from "./logic/gameState.js";
import { ctx } from "./logic/canvas.js";
import { drawFood, drawSnake } from "./logic/drawing.js";
import { STARTING_FOOD_POSITION } from "./logic/config.js";

function startGame() {
    gameState.score = 0;
    gameState.isRunning = true;
    //create random snake
    gameState.snake = [...gameState.snake];
    //create random food
    gameState.foodPosition = STARTING_FOOD_POSITION;
    //draw canvas elements
    drawSnake(gameState.snake);
    drawFood(STARTING_FOOD_POSITION);

    console.log("Game started!");
}

document.getElementById('btn-start').addEventListener('click', startGame);
document.getElementById('btn-reset').addEventListener('click', startGame);

document.addEventListener('keydown', (event) => {
    if (!gameState.isRunning) return;

    switch (event.key) {
        case 'ArrowLeft':
            moveSnake("left");
            break;
        case 'ArrowRight':
            moveSnake("right");
            break;
        case 'ArrowUp':
            moveSnake("up");
            break;
        case 'ArrowDown':
            moveSnake("down");
            break;
        default:
            break;
    }
});

//check if canvas is available
if (!ctx) {
    console.error("2D context of canvas is not available");
} else {
    startGame();
}


