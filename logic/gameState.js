/**
 * Represents the overall game state.
 * @typedef {Object} GameState
 * @property {?Coordinate[]} snake - Array of coordinates representing the snake (can be null).
 * @property {?Coordinate} food - Coordinates of the food (can be null).
 * @property {number} score - Current score.
 * @property {boolean} isRunning - Whether the game is currently running.
 * @property {number} speed - Game update speed.
 */

/** @type {GameState} */
export const gameState = {
    snake: null,
    food: null,
    score: null,
    isRunning: false,
    speed: null,
    currentDirection: null,
    nextDirection: null
};

export function resetState() {
    gameState.snake = null;
    gameState.food = null;
    gameState.score = null;
    gameState.isRunning = false;
    gameState.speed = null;
    gameState.currentDirection = null;
    gameState.nextDirection = null;
}