import { canvas, ctx } from "./canvas.js";
import { BORDER_WIDTH, SQUARE_SIZE, CANVAS_TEXT_STARTING_POSITION, } from "./config.js";
import { CANVAS_BG_CLR, CANVAS_BORDER_CLR, CANVAS_NEW_LINE_VERTICAL_SPACE, CANVAS_TEXT_CLR, CANVAS_TEXT_FONT, CANVAS_TEXT_SIZE, CLR_BORDER_SNAKE, CLR_FOOD, CLR_SNAKE_BODY, CLR_SNAKE_HEAD, FLASH_CANVAS_CLR, TITLE_CLR } from "./styling.js";

export function drawSnakeSegment(x, y, isHead) {
    //head of the snake has different color
    if (isHead) {
        ctx.fillStyle = CLR_SNAKE_HEAD;
    } else {
        ctx.fillStyle = CLR_SNAKE_BODY;
    }
    ctx.strokeStyle = CLR_BORDER_SNAKE;
    ctx.lineWidth = BORDER_WIDTH;
    ctx.fillRect(x, y, SQUARE_SIZE, SQUARE_SIZE)
    ctx.strokeRect(x, y, SQUARE_SIZE, SQUARE_SIZE)
}

export function drawSnake(snake) {
    snake.forEach((segment, i) => {
        drawSnakeSegment(segment.x, segment.y, i === 0 ? true : false)
    })
}

export function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

//remind use text align
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
    ctx.fillRect(position.x, position.y, SQUARE_SIZE, SQUARE_SIZE);
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

export function drawDashboard(score = 1) {
    clearCanvas();

    // background dashboard
    ctx.fillStyle = CANVAS_BG_CLR;
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    // border dashboard
    ctx.strokeStyle = CANVAS_BORDER_CLR;
    ctx.lineWidth = 6;
    ctx.strokeRect(10, 10, ctx.canvas.width - 20, ctx.canvas.height - 20);

    // title game
    ctx.fillStyle = TITLE_CLR;
    ctx.font = "bold 32px 'Press Start 2P', cursive"; // remind se vuoi un font stile pixel art (se disponibile)
    ctx.textAlign = "center";
    ctx.fillText("SNAKE GAME", ctx.canvas.width / 2, 70);

    // score
    ctx.font = "bold 24px Arial";
    ctx.fillStyle = "#FFFFFF";
    ctx.textAlign = "left";
    ctx.fillText("Score:", 50, 130);

    ctx.fillStyle = "#FFFF00"; // giallo per il punteggio
    ctx.fillText(score.toString(), 140, 130);

    // Bottone START (rettangolo + testo)
    const btnX = 50;
    const btnY = 180;
    const btnWidth = 150;
    const btnHeight = 50;

    // Sfondo bottone
    ctx.fillStyle = "#00A2E8"; // blu brillante
    ctx.fillRect(btnX, btnY, btnWidth, btnHeight);

    // Bordo bottone
    ctx.strokeStyle = "#FFFFFF";
    ctx.lineWidth = 3;
    ctx.strokeRect(btnX, btnY, btnWidth, btnHeight);

    // Testo bottone
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold 24px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("PLAY", btnX + btnWidth / 2, btnY + btnHeight / 2);
}