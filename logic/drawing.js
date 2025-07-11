import { canvas, ctx } from "./canvas.js";
import {
    BORDER_WIDTH, SNAKE_SEGMENT_HEIGHT, SNAKE_SEGMENT_WIDTH, CLR_SNAKE_HEAD, CLR_BORDER_SNAKE, CLR_SNAKE_BODY, CLR_FOOD,
    FOOD_HEIGHT, FOOD_WIDTH, CANVAS_TEXT_FONT, CANVAS_TEXT_CLR, CANVAS_TEXT_SIZE, CANVAS_TEXT_STARTING_POSITION
} from "./config.js";

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
export function drawRandomSnake(length) {
    //todo
}

export function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

export function drawText(text) {
    ctx.fillStyle = CANVAS_TEXT_CLR;
    ctx.font = `${CANVAS_TEXT_SIZE} ${CANVAS_TEXT_FONT}`;
    ctx.fillText(text, CANVAS_TEXT_STARTING_POSITION.x, CANVAS_TEXT_STARTING_POSITION.y);
}

export function drawFood(position) {
    ctx.fillStyle = CLR_FOOD;
    ctx.fillRect(position.x, position.y, FOOD_WIDTH, FOOD_HEIGHT);
}