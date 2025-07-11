
import { moveSnake } from "./logic/game.js";
import { gameState } from "./logic/gameState.js";
import { ctx } from "./logic/canvas.js";
import { drawFood, drawSnake } from "./logic/drawing.js";
import { STARTING_FOOD_POSITION, STARTING_SCORE, LABEL_GAME_STARTED } from "./logic/config.js";

function startGame() {
    gameState.score = STARTING_SCORE;
    gameState.isRunning = true;
    //todo implement randomn creation
    gameState.snake = [...gameState.snake];
    gameState.food = STARTING_FOOD_POSITION;

    //draw canvas elements
    drawSnake(gameState.snake);
    drawFood(gameState.food);

    console.log(LABEL_GAME_STARTED);
}

document.getElementById('btn-start').addEventListener('click', startGame);
//todo new button reset and show dashboard, not implmented the html yet
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
    //todo actually replace with dashboard when implemented
    startGame();
}


