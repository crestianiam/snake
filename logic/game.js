import { drawSnake, clearCanvas, drawText, drawFood } from "./drawing.js";
import { CANVAS_HEIGHT, CANVAS_WIDTH, ORIGINAL_SNAKE, STARTING_SCORE } from "./config.js";
import { gameState } from "./gameState.js";
import { getRandomAvailablePoint, isSamePoint, updateScoreDisplay } from "./utility.js";

export function moveSnake(direction) {
    const currentSnake = gameState.snake.map(segment => ({ x: segment.x, y: segment.y }));
    let newHead = null;
    const currentHead = { ...currentSnake[0] };
    const secondPosition = currentSnake.length > 1 ? { ...currentSnake[1] } : null;
    const lastPosition = { ...currentSnake[currentSnake.length - 1] };

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
        console.warn("Direction not valid!");
        return;
    };

    //going backwards not allowed
    if (secondPosition && isSamePoint(newHead, secondPosition)) {
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
    if (newHead.x < 0 || newHead.y < 0 || newHead.x >= CANVAS_WIDTH || newHead.y >= CANVAS_HEIGHT) {
        console.error("Collision with wall detected!")
        gameOver();
        return;
    }
    //movement accepted, drawing the new snake
    let hasEaten = eatFood(newHead);

    let newSnake = [newHead];
    for (let i = 0; i < currentSnake.length - 1; i++) {
        const segment = { x: currentSnake[i].x, y: currentSnake[i].y }
        newSnake.push(segment);
    }

    if (hasEaten) {
        newSnake.push(lastPosition);
    }

    //updating state
    gameState.snake = Array.from(newSnake);
    gameState.foodPosition = hasEaten ? getRandomAvailablePoint(newSnake) : gameState.foodPosition;
    gameState.score = hasEaten ? ++gameState.score : gameState.score;
    updateScoreDisplay(gameState.score);

    drawCanvasAfterMovement();
}

function drawCanvasAfterMovement() {
    clearCanvas();
    drawSnake(gameState.snake);
    drawFood(gameState.foodPosition);
}

export function gameOver() {
    clearCanvas();
    gameState.snake = Array.from(ORIGINAL_SNAKE);
    gameState.score = STARTING_SCORE;
    gameState.isRunning = false;
    //drawSnake(ORIGINAL_SNAKE);
    drawText("GAME OVER")
}

export function collisionDetected() {
    //remind mettere gameover ecc.
}

/**
 * 
 * @param {*} head 
 * @returns {boolean}
 */
export function eatFood(head) {
    return isSamePoint(head, gameState.foodPosition);
}