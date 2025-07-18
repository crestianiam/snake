import { canvas, ctx } from "./canvas.js";
import {
    BORDER_WIDTH, SNAKE_SEGMENT_HEIGHT, SNAKE_SEGMENT_WIDTH, CLR_SNAKE_HEAD, CLR_BORDER_SNAKE, CLR_SNAKE_BODY, CLR_FOOD,
    FOOD_HEIGHT, FOOD_WIDTH, CANVAS_TEXT_FONT, CANVAS_TEXT_CLR, CANVAS_TEXT_SIZE, CANVAS_TEXT_STARTING_POSITION,
    FLASH_CANVAS_CLR,
    CANVAS_NEW_LINE_VERTICAL_SPACE
} from "./config.js";
import { getRandomAvailablePoint } from "./utility.js";

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
export function createRandomSnake() {
    return [getRandomAvailablePoint([])];
}

export function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

export function drawText(messages) {
    if (!messages || messages.length === 0) return;


    for (let i = 0; i < messages.length; i++) {
        let x = CANVAS_TEXT_STARTING_POSITION.x;
        let y = CANVAS_TEXT_STARTING_POSITION.y + i * CANVAS_NEW_LINE_VERTICAL_SPACE;
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