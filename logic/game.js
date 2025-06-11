import { drawSnake, clearCanvas, drawText } from "./drawing.js";
import { ORIGINAL_SNAKE, STARTING_SCORE } from "./config.js";
import { gameState } from "./gameState.js";

export function moveSnake(direction, snake) {
    const currentSnake = [...gameState.snake];
    let newHead = null;
    const currentHead = snake[0];
    switch (direction) {
        case ("up"):
            newHead = { x: currentHead.x, y: currentHead.y - 10 };
            break;
        case ("down"):
            newHead = { x: currentHead.x, y: currentHead.y + 10 };
            break;
        case ("right"):
            newHead = { x: currentHead.x + 10, y: currentHead.y };
            break;
        case ("left"):
            newHead = { x: currentHead.x - 10, y: currentHead.y };
            break;
        default:
            break;
    }
    //direction not valid
    if (!newHead) {
        console.error("Direction not valid!")
    };
    //position overlapping with the snake 
    const snakeCollison = currentSnake.some((segment) => segment.x === newHead.x && segment.y === newHead.y);
    if (snakeCollison) {
        console.error("Collision with snake detected!");
        gameOver();
        return;
    };
    //collision with wall detected
    if (newHead.x < 0 || newHead.y < 0) {
        console.error("Collision with wall!")
        gameOver();
        return;
    }

    let newSnake = [newHead];
    for (let i = 0; i < snake.length - 1; i++) {
        const segment = { x: snake[i].x, y: snake[i].y }
        newSnake.push(segment);
    }

    gameState.snake = Array.from(newSnake);

    //drawing newSnake
    clearCanvas();
    console.log("New head position x: ", newHead.x, " y: ", newHead.y)
    drawSnake(gameState.snake);
}
export function gameOver() {
    clearCanvas();
    gameState.snake = Array.from(ORIGINAL_SNAKE);
    gameState.score = STARTING_SCORE;
    gameState.isRunning = false;
    //drawSnake(ORIGINAL_SNAKE);
    drawText("GAME OVER")
}
