import { canvas, ctx } from "./canvas.js";
import {
    BORDER_WIDTH, SNAKE_SEGMENT_HEIGHT, SNAKE_SEGMENT_WIDTH, CLR_SNAKE_HEAD, CLR_BORDER_SNAKE, CLR_SNAKE_BODY, CLR_FOOD,
    FOOD_HEIGHT, FOOD_WIDTH, CANVAS_TEXT_FONT, CANVAS_TEXT_CLR, CANVAS_TEXT_SIZE, CANVAS_TEXT_STARTING_POSITION,
    LABEL_SNAKE_LENGTH_NEGATIVE,
    LABEL_SNAKE_LENGTH_BIG,
    CANVAS_TOTAL_X_POSITIONS,
    CANVAS_TOTAL_Y_POSITIONS,
    FLASH_CANVAS_CLR
} from "./config.js";
import { getRandomAvailablePoint, getRandomPointDirection, getRandomPoint } from "./utility.js";

export function drawSnakeSegment(x, y, isHead) {
    //head of the snake has different color
    if (isHead) {
        ctx.fillStyle = CLR_SNAKE_HEAD;
    } else {
        ctx.fillStyle = CLR_SNAKE_BODY;
    }
    ctx.strokeStyle = CLR_BORDER_SNAKE;
    ctx.lineWidth = BORDER_WIDTH;
    ctx.fillRect(x, y, SNAKE_SEGMENT_WIDTH, SNAKE_SEGMENT_HEIGHT)
    ctx.strokeRect(x, y, SNAKE_SEGMENT_WIDTH, SNAKE_SEGMENT_HEIGHT)
}

export function drawSnake(snake) {
    snake.forEach((segment, i) => {
        drawSnakeSegment(segment.x, segment.y, i === 0 ? true : false)
    })
}

/**
 * Draw a random snake inside the board
 * @param {number} length - Length of the snake
 * @returns {Array<Coordinate>|null} Snake generated
 */
export function createRandomSnake(length) {
    if (length <= 0) {
        console.error(LABEL_SNAKE_LENGTH_NEGATIVE);
        return null;
    }

    if (length > CANVAS_TOTAL_X_POSITIONS || length > CANVAS_TOTAL_Y_POSITIONS) {
        console.error(LABEL_SNAKE_LENGTH_BIG);
        return null;
    }

    if (length === 1) {
        return [getRandomAvailablePoint([])];
    }

    //todo length > 1

    const snake = [];

    const direction = getRandomPointDirection();

    let headPosition;

    switch (direction) {
        //up
        case (direction.x === 0 && direction.y === -10):
            //
            break;
        //down
        case (direction.x === 0 && direction.y === 10):
            //

            break;
        //right
        case (direction.x === 10 && direction.y === 0):
            //
            break;
        //left
        case (direction.x === 0 && direction.y === 0):
            break;
        default:
            //console.error("Invalid direction");
            return null;
    }


    const head = getRandomPoint();
    snake.push(head);

    for (let i = 1; i < length; i++) {
        const lastSegment = snake[snake.length - 1];
        const newSegment = getNextRandomSegment(lastSegment, snake);

        if (!newSegment) {
            console.error(LABEL_SNAKE_LENGTH_BIG);
            return null;
        }

        snake.push(newSegment);
    }

    drawSnake(snake);
    return snake;

}

export function getNextRandomSegment() {

}

export function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

export function drawText(messages) {
    if (!messages || messages.length === 0) return;


    for (let i = 0; i < messages.length; i++) {
        let x = CANVAS_TEXT_STARTING_POSITION.x;
        let y = CANVAS_TEXT_STARTING_POSITION.y + i * 20;
        ctx.fillStyle = CANVAS_TEXT_CLR;
        ctx.font = `${CANVAS_TEXT_SIZE} ${CANVAS_TEXT_FONT}`;
        ctx.fillText(messages[i], x, y);
    }
}

export function drawFood(position) {
    ctx.fillStyle = CLR_FOOD;
    ctx.fillRect(position.x, position.y, FOOD_WIDTH, FOOD_HEIGHT);
}

export function flashCanvas(flash) {
    let flashColor = FLASH_CANVAS_CLR.get("default");
    if (FLASH_CANVAS_CLR.has(flash)) {
        flashColor = FLASH_CANVAS_CLR.get(flash);
    }

    const canvas = document.getElementById("gameCanvas");
    const colorClass = `canvas-flash-${flashColor}`;

    canvas.classList.add("canvas-flash", colorClass);
    setTimeout(() => {
        canvas.classList.remove("canvas-flash", colorClass);
    }, 200);
}