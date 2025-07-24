/**
 * Represents coordinates on a the canvas.
 * @typedef {Object} Coordinate
 * @property {number} x - X position.
 * @property {number} y - Y position.
 */
/**
 * Represents the overall game state.
 * @typedef {Object} Game
 * @property {?Coordinate[]} snake - Array of coordinates representing the snake (can be null).
 * @property {?Coordinate} food - Coordinates of the food (can be null).
 * @property {?number} score - Current score.
 * @property {?boolean} isRunning - Whether the game is currently running.
 * @property {?number} speed - Game update speed.
 */
/**
/**
 * Represents the user state.
 * @typedef {Object} User
 * @property {string} name - Name of the user currently playing.
 * @property {number} record - Personal record of the user.
 * @property {number} soundtrack - Soundtrack chosen.
 */