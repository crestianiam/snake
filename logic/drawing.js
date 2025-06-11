import { canvas, ctx } from "./canvas.js";
import { BORDER_WIDTH, SNAKE_SEGMENT_HEIGHT, SNAKE_SEGMENT_WIDTH, CLR_SNAKE_HEAD, CLR_BORDER_SNAKE, CLR_SNAKE_BODY } from "./config.js";

export function drawSnakeSegment(x, y, index) {
    ctx.fillStyle = CLR_SNAKE_BODY;
    ctx.strokeStyle = CLR_BORDER_SNAKE;
    ctx.lineWidth = BORDER_WIDTH;
    //head with different color
    if (index === 0) {
        ctx.fillStyle = CLR_SNAKE_HEAD;
    }
    ctx.fillRect(x, y, SNAKE_SEGMENT_WIDTH, SNAKE_SEGMENT_HEIGHT)
    ctx.strokeRect(x, y, SNAKE_SEGMENT_WIDTH, SNAKE_SEGMENT_HEIGHT)
}

export function drawSnake(snake) {
    clearCanvas();
    snake.forEach((segment, i) => {
        drawSnakeSegment(segment.x, segment.y, i)
    })
}

export function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

export function clearRect() {
    ctx.clearRect(
        100 - BORDER_WIDTH,           // x - spessore bordo
        150 - BORDER_WIDTH,           // y - spessore bordo  
        SNAKE_SEGMENT_WIDTH + (BORDER_WIDTH * 2), // larghezza + bordo su entrambi i lati
        SNAKE_SEGMENT_HEIGHT + (BORDER_WIDTH * 2)  // altezza + bordo su entrambi i lati
    );
}

export function drawText(text, x = 90, y = 150, color = "black", size = "20px") {
    ctx.fillStyle = color;
    ctx.font = `${size} Arial`;
    ctx.fillText(text, x, y);
}
