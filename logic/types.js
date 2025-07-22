/**
 * Represents coordinates on a the canvas.
 * @typedef {Object} Coordinate
 * @property {number} x - X position.
 * @property {number} y - Y position.
 */
/**
 * Represents the overall game state.
 * @typedef {Object} GameState
 * @property {?Coordinate[]} snake - Array of coordinates representing the snake (can be null).
 * @property {?Coordinate} food - Coordinates of the food (can be null).
 * @property {?number} score - Current score.
 * @property {?boolean} isRunning - Whether the game is currently running.
 * @property {?number} speed - Game update speed.
 */