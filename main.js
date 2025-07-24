
import { moveSnake, updateBoard } from "./logic/game.js";
import { gameState, resetState, STARTING_SCORE, STARTING_SPEED } from "./logic/gameState.js";
import { ctx } from "./logic/canvas.js";
import { clearCanvas, drawDashboard } from "./logic/drawing.js";
import { LABEL_GAME_STARTED, LABEL_GAME_CANNOT_START } from "./utils/config.js";
import { getRandomAvailablePoint, getRandomCentralPoint, getRandomStringDirection } from "./utils/helperFunctions.js";
import { playBackgroundMusic, playCollisionSound, playVictorySound, stopBackgroundMusic } from "./utils/audio.js";
import { registerEventListeners } from "./events.js";
import { userState } from "./logic/userState.js";
import { loadAssets } from "./assets/index.js";

let gameInterval = null;

function startGameLoop() {
    if (gameInterval) {
        clearInterval(gameInterval);
    }

    gameInterval = setInterval(() => {
        if (gameState.isRunning && gameState.currentDirection) {
            moveSnake();
        }
    }, gameState.speed);
}

function stopGameLoop() {
    if (gameInterval) {
        clearInterval(gameInterval);
        gameInterval = null;
    }
}

export function startGame() {
    gameState.score = STARTING_SCORE;
    gameState.isRunning = true;
    //remind throw of getRandomAvailablePoint non handled, no need on empty board
    gameState.snake = [getRandomCentralPoint()];
    gameState.food = getRandomAvailablePoint(gameState.snake);
    gameState.speed = STARTING_SPEED;
    gameState.currentDirection = getRandomStringDirection();
    gameState.nextDirection = null;

    updateBoard();
    startGameLoop();
    playBackgroundMusic(userState.soundtrack);

    console.log(LABEL_GAME_STARTED);
}

export function gameOver() {
    const finalScore = gameState.score;
    stopBackgroundMusic(userState.soundtrack);
    playCollisionSound();
    stopGameLoop();
    resetState();
    drawDashboard(finalScore, false);
}

export function victory() {
    const finalScore = gameState.score;
    stopBackgroundMusic(userState.soundtrack);
    playVictorySound();
    clearCanvas();
    stopGameLoop();
    resetState();
    drawDashboard(finalScore, true);
}

async function initialize() {
    await loadAssets();
    if (ctx) {
        drawDashboard();
        registerEventListeners();
    } else {
        console.error(LABEL_GAME_CANNOT_START);
    }
}

initialize();
