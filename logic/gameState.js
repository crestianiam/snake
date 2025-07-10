import { ORIGINAL_SNAKE, STARTING_SCORE } from './config.js';

export let gameState = {
    snake: [...ORIGINAL_SNAKE],
    score: STARTING_SCORE,
    isRunning: false,
    foodPosition: null,
    //gameSpeed: 200
};