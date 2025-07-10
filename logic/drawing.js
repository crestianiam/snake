import { canvas, ctx } from "./canvas.js";
import {
    BORDER_WIDTH, SNAKE_SEGMENT_HEIGHT, SNAKE_SEGMENT_WIDTH, CLR_SNAKE_HEAD, CLR_BORDER_SNAKE, CLR_SNAKE_BODY, CLR_FOOD,
    FOOD_HEIGHT, FOOD_WIDTH
} from "./config.js";

export function drawStartingSnakeSegment(x, y, index) {
    ctx.fillStyle = CLR_SNAKE_BODY;
    ctx.strokeStyle = CLR_BORDER_SNAKE;
    ctx.lineWidth = BORDER_WIDTH;
    //head of the snake with different color
    if (index === 0) {
        ctx.fillStyle = CLR_SNAKE_HEAD;
    }
    ctx.fillRect(x, y, SNAKE_SEGMENT_WIDTH, SNAKE_SEGMENT_HEIGHT)
    ctx.strokeRect(x, y, SNAKE_SEGMENT_WIDTH, SNAKE_SEGMENT_HEIGHT)
}

export function drawSnake(snake) {
    snake.forEach((segment, i) => {
        drawStartingSnakeSegment(segment.x, segment.y, i)
    })
}
export function drawRandomSnake(length) {
    //todo
}

export function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

export function drawText(text, x = 90, y = 150, color = "black", size = "20px") {
    ctx.fillStyle = color;
    ctx.font = `${size} Arial`;
    ctx.fillText(text, x, y);
}

export function drawFood(position) {
    ctx.fillStyle = CLR_FOOD;
    ctx.fillRect(position.x, position.y, FOOD_WIDTH, FOOD_HEIGHT)
}