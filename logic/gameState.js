/**
 * Represents the overall game state.
 * @typedef {Object} GameState
 * @property {?Coordinate[]} snake - Array of coordinates representing the snake (can be null).
 * @property {?Coordinate} food - Coordinates of the food (can be null).
 * @property {number} score - Current score.
 * @property {boolean} isRunning - Whether the game is currently running.
 * @property {number} [gameSpeed] - Game update speed (optional).
 */

/** @type {GameState} */
export const gameState = {
    snake: null,
    food: null,
    score: 0,
    isRunning: false,
    //currentDirection:up-left-down-right
    //todo gameSpeed: 200,
};