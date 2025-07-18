import { CANVAS_TOTAL_X_POSITIONS, CANVAS_TOTAL_Y_POSITIONS, HTML_CURRENT_SCORE_ID, SQUARE_SIZE } from "./config.js";

/**
 * @fileoverview Game utility functions
 * @description not using gameState in this file for keeping decoupling of this file
 * @module utility
*/

export function isSamePoint(p1, p2) {
    return p1.x === p2.x && p1.y === p2.y;
}
export function getRandomIntNumberBetween(min, max, maxIncluded) {
    if (min > max || min === undefined || max === undefined) return undefined;
    return Math.floor(Math.random() * (max - min + (maxIncluded ? 1 : 0))) + min;
}

export function getRandomXPoint() {
    const min = 0;
    const max = CANVAS_TOTAL_X_POSITIONS;
    //random between 0 and CANVAS_TOTAL_X_POSITIONS included
    const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
    //example, with 29 tot position -> [0,290]
    return randomInt * SQUARE_SIZE;
}

export function getRandomYPoint() {
    const min = 0;
    const max = CANVAS_TOTAL_Y_POSITIONS;
    //random between 0 and CANVAS_TOTAL_Y_POSITIONS included
    const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
    //example, with 29 tot position -> [0,290]
    return randomInt * SQUARE_SIZE;
}

export function getRandomPoint() {
    return { x: getRandomXPoint(), y: getRandomYPoint() }
}

/**
 * Generate a random point on the canvas, avoiding already taken points
 * @param {Array<{x: number, y: number}>} [takenPoints=[]] Array of already taken points
 * @returns {{x: number, y: number}|null} Random point on canvas or null if not found after 100 attemps
 */
export function getRandomAvailablePoint(takenPoints = []) {
    if (takenPoints.length === 0) {
        return getRandomPoint();
    }
    let position = { x: null, y: null };
    const maxAttempts = 100;
    let attempts = 0;
    do {
        position = getRandomPoint();
        attempts++;
    } while (attempts < maxAttempts && takenPoints.some((point) => isSamePoint(point, position)))

    if (attempts >= maxAttempts) {
        return null;
    }
    return position;
}

export function updateScoreDisplay(score) {
    document.getElementById(HTML_CURRENT_SCORE_ID).innerText = score;
}

export function getSnakeCopy(snake) {
    return snake.map(segment => ({ x: segment.x, y: segment.y }));
}

export function getFoodCopy(food) {
    return { ...food };
}

export function getRandomPointDirection() {
    const directions = [
        //up
        { x: 0, y: -10 },
        //down
        { x: 0, y: 10 },
        //right
        { x: 10, y: 0 },
        //left
        { x: -10, y: 0 },
    ]
    return directions[getRandomIntNumberBetween(1, 4, true) - 1];
}


export function getRandomStringDirection() {
    const directions = [
        "up",
        "down",
        "right",
        "left"
    ]
    return directions[getRandomIntNumberBetween(1, 4, true) - 1];
}

export function isOppositeDirection(dir1, dir2) {
    const opposites = {
        up: 'down',
        down: 'up',
        left: 'right',
        right: 'left'
    };
    return opposites[dir1] === dir2;
}
