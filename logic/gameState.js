export const STARTING_SCORE = 0;
export const STARTING_SPEED = 200;

/** @type {Game} */
export const gameState = {
    //for showing msg in dashhoard
    snake: null,
    food: null,
    score: null,
    isRunning: false,
    speed: null,
    currentDirection: null,
    //used for checking correctly the opposite direction when multiple directions are pressed during the game interval
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
