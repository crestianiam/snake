import { canvas, ctx } from "./canvas.js";
import { BORDER_WIDTH, SQUARE_SIZE, GAME_WIDTH, GAME_HEIGHT, CANVAS_BORDER_LINE_SIZE, PLAY_BTN_WIDTH, PLAY_BTN_HEIGHT, PLAY_BTN_X, PLAY_BTN_Y, } from "../utils/config.js";;
import { CANVAS_BG_CLR, CANVAS_BORDER_CLR, CLR_BORDER_SNAKE, CLR_FOOD, CLR_SNAKE_BODY, CLR_SNAKE_HEAD, FLASH_CANVAS_CLR, PLAY_BTN_PRIMARY_CLR, PLAY_BTN_SECONDARY_CLR, SUBTITLE_CLR, TITLE_CLR } from "./styling.js";

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
/**
 * Draw dashboard and menu of the game
 * @param {number|null} score is null only before the first game
 */
export function drawDashboard(score = null, win = false) {
    clearCanvas();

    //background dashboard
    ctx.fillStyle = CANVAS_BG_CLR;
    ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

    //border dashboard
    ctx.strokeStyle = CANVAS_BORDER_CLR;
    ctx.lineWidth = CANVAS_BORDER_LINE_SIZE;
    ctx.strokeRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

    //game title
    ctx.fillStyle = TITLE_CLR;
    ctx.font = "bold 32px 'Press Start 2P', cursive"; // remind se vuoi un font stile pixel art (se disponibile)
    ctx.textAlign = "center";
    ctx.fillText("SNAKE GAME", Math.round(GAME_WIDTH / 2), Math.round(GAME_HEIGHT * 0.1));

    //welcome msg 
    if (score === null) {
        ctx.fillStyle = SUBTITLE_CLR;
        ctx.fillText("WELCOME IN THIS AWESOME GAME", Math.round(GAME_WIDTH / 2), Math.round(GAME_HEIGHT * 0.2));
    }

    //victory
    if (score !== null && win) {
        ctx.font = "bold 24px Arial";
        ctx.fillStyle = SUBTITLE_CLR;
        ctx.textAlign = "center";
        ctx.fillText(`YOU WON: ${score}`, Math.round(GAME_WIDTH / 2), Math.round(GAME_HEIGHT * 0.25));
    }

    //score
    if (score !== null && !win) {
        ctx.font = "bold 24px Arial";
        ctx.fillStyle = SUBTITLE_CLR;
        ctx.textAlign = "center";
        ctx.fillText(`YOUR SCORE: ${score}`, Math.round(GAME_WIDTH / 2), Math.round(GAME_HEIGHT * 0.25));
    }

    //btn play
    ctx.fillStyle = PLAY_BTN_PRIMARY_CLR;
    ctx.fillRect(PLAY_BTN_X, PLAY_BTN_Y, PLAY_BTN_WIDTH, PLAY_BTN_HEIGHT);

    ctx.strokeStyle = PLAY_BTN_SECONDARY_CLR;
    ctx.lineWidth = 3;
    ctx.strokeRect(PLAY_BTN_X, PLAY_BTN_Y, PLAY_BTN_WIDTH, PLAY_BTN_HEIGHT);

    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold 24px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("PLAY", PLAY_BTN_X + PLAY_BTN_WIDTH / 2, PLAY_BTN_Y + PLAY_BTN_HEIGHT / 2);
}

