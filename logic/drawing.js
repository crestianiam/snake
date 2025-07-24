import { canvas, ctx } from "./canvas.js";
import { BORDER_WIDTH, SQUARE_SIZE, GAME_WIDTH, GAME_HEIGHT, PLAY_BTN_WIDTH, PLAY_BTN_HEIGHT, PLAY_BTN_X, PLAY_BTN_Y, MUSIC_SELECTOR_TITLE_Y, MUSIC_SELECTOR_SIZE, MUSIC_SELECTOR_Y, MUSIC_SELECTOR_LABEL_OFFSET_X, MUSIC_SELECTOR_RETRO_X, MUSIC_SELECTOR_CHILL_X, MUSIC_SELECTOR_HARD_X, } from "../utils/config.js";;
import { CANVAS_BG_CLR, CLR_BORDER_FOOD, CLR_BORDER_SNAKE, CLR_FOOD, CLR_SNAKE_BODY, CLR_SNAKE_HEAD, FLASH_CANVAS_CLR, PLAY_BTN_PRIMARY_CLR, PLAY_BTN_SECONDARY_CLR, SUBTITLE_CLR } from "./styling.js";
import { userState } from "./userState.js";
import { foodImage } from "../assets/index.js";

export function drawSnakeSegment(x, y, isHead, color) {
    if (isHead) {
        ctx.fillStyle = CLR_SNAKE_HEAD; // colore testa fisso
    } else {
        ctx.fillStyle = color || CLR_SNAKE_BODY; // colore corpo personalizzato o default
    }

    ctx.strokeStyle = CLR_BORDER_SNAKE;
    ctx.lineWidth = BORDER_WIDTH;
    ctx.fillRect(x, y, SQUARE_SIZE, SQUARE_SIZE);
    ctx.strokeRect(x, y, SQUARE_SIZE, SQUARE_SIZE);
}

export function drawSnake(snake) {
    const totalSegments = snake.length;

    snake.forEach((segment, i) => {
        const isHead = i === 0;

        if (isHead) {
            drawSnakeSegment(segment.x, segment.y, true);
        } else {
            const hue = (i * 360 / totalSegments + Math.random() * 20) % 360; // tonalità arcobaleno casuale
            const saturation = 90 + Math.random() * 10; // saturazione alta 90-100%
            const lightness = 70 + Math.random() * 10;  // luminosità chiara 70-80%

            const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

            drawSnakeSegment(segment.x, segment.y, false, color);
        }
    });
}


export function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

export function drawFood(position) {
    // genera colore HSL casuale, luminoso e saturato
    /*    const hue = Math.floor(Math.random() * 360);
       const saturation = 90 + Math.random() * 10; // 90-100%
       const lightness = 70 + Math.random() * 10;  // 70-80%
   
       const randomColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
   
       ctx.fillStyle = randomColor;
       ctx.fillRect(position.x, position.y, SQUARE_SIZE, SQUARE_SIZE);
   
       ctx.strokeStyle = CLR_BORDER_FOOD;
       ctx.lineWidth = BORDER_WIDTH;
       ctx.strokeRect(position.x, position.y, SQUARE_SIZE, SQUARE_SIZE); */
    ctx.drawImage(foodImage, position.x, position.y, SQUARE_SIZE, SQUARE_SIZE);

    // Puoi ancora disegnare un bordo se vuoi
    ctx.strokeStyle = CLR_BORDER_FOOD;
    ctx.lineWidth = BORDER_WIDTH;
    //ctx.strokeRect(position.x, position.y, SQUARE_SIZE, SQUARE_SIZE);
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

    //welcome msg 
    if (score === null) {
        ctx.font = "bold 32px 'Press Start 2P', cursive"; // remind se vuoi un font stile pixel art (se disponibile)
        ctx.textAlign = "center";
        ctx.fillStyle = SUBTITLE_CLR;
        ctx.fillText("WELCOME IN THIS AWESOME GAME", Math.round(GAME_WIDTH / 2), Math.round(GAME_HEIGHT * 0.2));
    }

    //victory
    if (score !== null && win) {
        ctx.font = "bold 24px Arial";
        ctx.fillStyle = SUBTITLE_CLR;
        ctx.textAlign = "center";
        ctx.fillText(`OH YES, YOU WON!`, Math.round(GAME_WIDTH / 2), Math.round(GAME_HEIGHT * 0.25));
    }

    //score
    if (score !== null && !win) {
        ctx.font = "bold 24px Arial";
        ctx.fillStyle = SUBTITLE_CLR;
        ctx.textAlign = "center";
        ctx.fillText(`OH NO, YOU SUCK!`, Math.round(GAME_WIDTH / 2), Math.round(GAME_HEIGHT * 0.25));
    }

    drawMusicSelector();

    drawPlayButton();
}

export function drawPlayButton() {
    ctx.fillStyle = PLAY_BTN_PRIMARY_CLR;
    ctx.fillRect(PLAY_BTN_X, PLAY_BTN_Y, PLAY_BTN_WIDTH, PLAY_BTN_HEIGHT);

    ctx.strokeStyle = PLAY_BTN_SECONDARY_CLR;
    ctx.lineWidth = 3;
    ctx.strokeRect(PLAY_BTN_X, PLAY_BTN_Y, PLAY_BTN_WIDTH, PLAY_BTN_HEIGHT);

    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold 24px 'Press Start 2P', cursive";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("PLAY", PLAY_BTN_X + PLAY_BTN_WIDTH / 2, PLAY_BTN_Y + PLAY_BTN_HEIGHT / 2);
}

export function drawMusicSelector() {
    const musicOptions = [
        { label: "Retro", value: 0, x: MUSIC_SELECTOR_RETRO_X },
        { label: "Chill", value: 1, x: MUSIC_SELECTOR_CHILL_X },
        { label: "Hard", value: 2, x: MUSIC_SELECTOR_HARD_X }
    ];

    ctx.font = "bold 18px 'Press Start 2P', cursive";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = SUBTITLE_CLR;
    ctx.fillText("SELECT YOUR SOUNDTRACK:", GAME_WIDTH / 2, MUSIC_SELECTOR_TITLE_Y);

    musicOptions.forEach(option => {
        const isSelected = userState.soundtrack === option.value;

        // Disegna la casella
        ctx.strokeStyle = SUBTITLE_CLR;
        ctx.lineWidth = 2;
        ctx.strokeRect(option.x - MUSIC_SELECTOR_SIZE / 2, MUSIC_SELECTOR_Y - MUSIC_SELECTOR_SIZE / 2, MUSIC_SELECTOR_SIZE, MUSIC_SELECTOR_SIZE);

        // Disegna il "checkmark" se è selezionato
        if (isSelected) {
            ctx.fillStyle = PLAY_BTN_PRIMARY_CLR;
            ctx.fillRect(option.x - MUSIC_SELECTOR_SIZE / 2 + 4, MUSIC_SELECTOR_Y - MUSIC_SELECTOR_SIZE / 2 + 4, MUSIC_SELECTOR_SIZE - 8, MUSIC_SELECTOR_SIZE - 8);
        }

        // Disegna l'etichetta del testo
        ctx.fillStyle = SUBTITLE_CLR;
        ctx.textAlign = "left";
        ctx.fillText(option.label, option.x + MUSIC_SELECTOR_LABEL_OFFSET_X, MUSIC_SELECTOR_Y);
        ctx.textAlign = "center"; // Ripristina l'allineamento per il prossimo elemento
    });
}
