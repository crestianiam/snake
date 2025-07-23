import { drawSnake, clearCanvas, drawFood, flashCanvas } from "./drawing.js";
import { GAME_HEIGHT, GAME_WIDTH, EXCEPTION_NO_POINTS_AVAILABLE, LABEL_COLLISION_WITH_SNAKE, LABEL_COLLISION_WITH_WALL, LABEL_DIRECTION_NOT_VALID, LABEL_GOING_BACKWARDS_NOT_ALLOWED, MAX_SNAKE_LENGTH, SQUARE_SIZE } from "../utils/config.js";
import { gameState } from "./gameState.js";
import { getRandomAvailablePoint, getSnakeCopy, isSamePoint } from "../utils/helperFunctions.js";
import { gameOver, victory } from "../main.js";
import { playEatSound } from "../utils/audio.js";
import { FLASH_COLLISION, FLASH_SUCCESS } from "./styling.js";
import { updateScoreDisplay } from "../events.js";

export function moveSnake() {
    if (gameState.snake === null || gameState.snake.length === 0) return;

    //if none direction specified use the current one
    const moveDirection = gameState.nextDirection || gameState.currentDirection;
    if (!moveDirection) return;

    gameState.currentDirection = moveDirection;
    gameState.nextDirection = null;

    const currentSnake = getSnakeCopy(gameState.snake);
    let newHead = null;
    const firstPosition = { ...currentSnake[0] };
    const secondPosition = currentSnake.length > 1 ? { ...currentSnake[1] } : null;
    const lastPosition = { ...currentSnake[currentSnake.length - 1] };

    switch (moveDirection) {
        case ("up"):
            newHead = { x: firstPosition.x, y: firstPosition.y - SQUARE_SIZE };
            break;
        case ("down"):
            newHead = { x: firstPosition.x, y: firstPosition.y + SQUARE_SIZE };
            break;
        case ("right"):
            newHead = { x: firstPosition.x + SQUARE_SIZE, y: firstPosition.y };
            break;
        case ("left"):
            newHead = { x: firstPosition.x - SQUARE_SIZE, y: firstPosition.y };
            break;
        default:
            break;
    }

    //direction keyboard key not valid
    if (!newHead) {
        console.warn(LABEL_DIRECTION_NOT_VALID);
        return;
    };

    //going backwards not allowed
    if (secondPosition && isSamePoint(newHead, secondPosition)) {
        console.warn(LABEL_GOING_BACKWARDS_NOT_ALLOWED);
        return;
    }

    //collision with snake detected
    const snakeCollison = currentSnake.some((segment) => segment.x === newHead.x && segment.y === newHead.y);
    if (snakeCollison) {
        collison(LABEL_COLLISION_WITH_SNAKE);
        return;
    };
    //collision with wall detected
    if (newHead.x < 0 || newHead.y < 0 || newHead.x >= GAME_WIDTH || newHead.y >= GAME_HEIGHT) {
        collison(LABEL_COLLISION_WITH_WALL);
        return;
    }

    //movement accepted, creating the new snake
    let hasEaten = eatFood(newHead);

    let newSnake = [newHead];
    for (let i = 0; i < currentSnake.length - 1; i++) {
        const segment = { x: currentSnake[i].x, y: currentSnake[i].y }
        newSnake.push(segment);
    }

    //remind update here or bottom
    if (hasEaten) {
        newSnake.push(lastPosition);
        flashCanvas(FLASH_SUCCESS);
        playEatSound();
    }

    //updating state
    gameState.snake = Array.from(newSnake);
    try {
        gameState.food = hasEaten ? getRandomAvailablePoint(newSnake) : gameState.food;
    } catch (error) {
        if (error.message === EXCEPTION_NO_POINTS_AVAILABLE) {
            victory();
            return;
        }
    }
    gameState.score = hasEaten ? ++gameState.score : gameState.score;
    updateScoreDisplay(gameState.score);

    //remind probably set victory earlier
    if (gameState.snake.length >= MAX_SNAKE_LENGTH) {
        gameOver();
        return;
    }

    updateBoard();
}

export function updateBoard() {
    clearCanvas();
    drawSnake(gameState.snake);
    drawFood(gameState.food);
}

function collison(msg) {
    if (msg) {
        console.error(msg)
    }
    flashCanvas(FLASH_COLLISION);
    victory();
}

function eatFood(head) {
    return isSamePoint(head, gameState.food);
}

