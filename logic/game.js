import { drawSnake, clearCanvas, drawText } from "./drawing.js";
import { ORIGINAL_SNAKE, STARTING_SCORE } from "./config.js";
import { gameState } from "./gameState.js";
import { isSameCartesianPoint } from "./utility.js";

export function moveSnake(direction, snake) {
    console.log("current head position", snake[0])
    const currentSnake = [...gameState.snake];
    let newHead = null;
    const currentHead = snake[0];
    const secondPosition = snake.length > 1 ? { x: snake[1].x, y: snake[1].y } : null;
    console.log("second", secondPosition)

    switch (direction) {
        //going up, decrease the y axis
        case ("up"):
            newHead = { x: currentHead.x, y: currentHead.y - 10 };
            break;
        //going down, increase the y axis
        case ("down"):
            newHead = { x: currentHead.x, y: currentHead.y + 10 };
            break;
        //going right, increase the x axis
        case ("right"):
            newHead = { x: currentHead.x + 10, y: currentHead.y };
            break;
        //going left, decrease the x axis
        case ("left"):
            newHead = { x: currentHead.x - 10, y: currentHead.y };
            break;
        default:
            break;
    }
    //direction keyboard key not valid
    if (!newHead) {
        console.error("Direction not valid!");
        return;
    };
    //going backwards not allowed
    if (secondPosition && isSameCartesianPoint(newHead, secondPosition)) {
        console.error("Going backwards is not allowed!");
        return;
    }

    //collision with snake detected
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
    //remind intercept eat food
    //check if new snake causing any collision

    //movement accepted, drawing the new snake
    let newSnake = [newHead];
    for (let i = 0; i < snake.length - 1; i++) {
        const segment = { x: snake[i].x, y: snake[i].y }
        newSnake.push(segment);
    }

    gameState.snake = Array.from(newSnake);

    //drawing newSnake
    clearCanvas();
    console.log("New head position x: ", newHead.x, " y: ", newHead.y);
    console.log("----------------------")
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
