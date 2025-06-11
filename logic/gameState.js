import { ORIGINAL_SNAKE, STARTING_SCORE } from './config.js';

export let gameState = {
    snake: [...ORIGINAL_SNAKE],
    score: STARTING_SCORE,
    isRunning: false,
    //currentDirection: null
    //gameSpeed: 200
};