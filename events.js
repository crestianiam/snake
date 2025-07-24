import { canvas } from "./logic/canvas.js";
import { drawDashboard } from "./logic/drawing.js";
import { moveSnake } from "./logic/game.js";
import { gameState } from "./logic/gameState.js";
import { userState } from "./logic/userState.js";
import { startGame } from "./main.js";
import { MUSIC_SELECTOR_CHILL_X, MUSIC_SELECTOR_HARD_X, MUSIC_SELECTOR_RETRO_X, MUSIC_SELECTOR_SIZE, MUSIC_SELECTOR_Y, PLAY_BTN_HEIGHT, PLAY_BTN_WIDTH, PLAY_BTN_X, PLAY_BTN_Y } from "./utils/config.js";
import { isOppositeDirection } from "./utils/helperFunctions.js";

//html ids
const HTML_CURRENT_SCORE_ID = "currentScore";

export function updateScoreDisplay(score) {
    document.getElementById(HTML_CURRENT_SCORE_ID).innerText = score;
}

export function registerEventListeners() {
    document.addEventListener('keydown', (event) => {
        if (!gameState.isRunning) return;

        let newDirection = null;
        switch (event.key) {
            case 'ArrowLeft':
                newDirection = "left";
                break;
            case 'ArrowRight':
                newDirection = "right";
                break;
            case 'ArrowUp':
                newDirection = "up";
                break;
            case 'ArrowDown':
                newDirection = "down";
                break;
            default:
                break;
        }
        if (newDirection &&
            //prevent going backwards if snake has more than one segments
            (gameState.snake.length === 1 || !isOppositeDirection(newDirection, gameState.currentDirection))) {
            gameState.nextDirection = newDirection;
        }
        //moveSnake(newDirection)
    });

    canvas.addEventListener('click', function (event) {
        const rect = canvas.getBoundingClientRect();
        const clickX = event.clientX - rect.left;
        const clickY = event.clientY - rect.top;

        if (
            clickX >= PLAY_BTN_X &&
            clickX <= PLAY_BTN_X + PLAY_BTN_WIDTH &&
            clickY >= PLAY_BTN_Y &&
            clickY <= PLAY_BTN_Y + PLAY_BTN_HEIGHT
        ) {
            startGame();
        }
    });
}

canvas.addEventListener("mousedown", (e) => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    if (!gameState.isRunning) {
        // Check for PLAY button click
        if (mouseX >= PLAY_BTN_X && mouseX <= PLAY_BTN_X + PLAY_BTN_WIDTH && mouseY >= PLAY_BTN_Y && mouseY <= PLAY_BTN_Y + PLAY_BTN_HEIGHT) {
            startGame();
            return;
        }

        // Check for music selector click
        const musicOptions = [
            { value: 0, x: MUSIC_SELECTOR_RETRO_X },
            { value: 1, x: MUSIC_SELECTOR_CHILL_X },
            { value: 2, x: MUSIC_SELECTOR_HARD_X }
        ];

        musicOptions.forEach(option => {
            const size = MUSIC_SELECTOR_SIZE;
            const clickAreaX = option.x - size / 2;
            const clickAreaY = MUSIC_SELECTOR_Y - size / 2;

            if (mouseX >= clickAreaX && mouseX <= clickAreaX + size && mouseY >= clickAreaY && mouseY <= clickAreaY + size) {
                userState.soundtrack = option.value;
                drawDashboard();
            }
        });
    }
});