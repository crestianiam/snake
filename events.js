import { canvas } from "./logic/canvas.js";
import { moveSnake } from "./logic/game.js";
import { gameState } from "./logic/gameState.js";
import { startGame } from "./main.js";
import { PLAY_BTN_HEIGHT, PLAY_BTN_WIDTH, PLAY_BTN_X, PLAY_BTN_Y } from "./utils/config.js";
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
            console.log("Hai cliccato il bottone PLAY!");
            startGame();
        }
    });
}