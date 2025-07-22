import { GRID_WIDTH, GRID_HEIGHT, MAX_RANDOM_ATTEMPTS_LOOP, SQUARE_SIZE, EXCEPTION_NO_POINTS_AVAILABLE } from "./config.js";

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
    // 0-29
    const columnIndex = Math.floor(Math.random() * GRID_WIDTH);
    // 0-290
    return columnIndex * SQUARE_SIZE;
}
export function getRandomYPoint() {
    // 0-29
    const columnIndex = Math.floor(Math.random() * GRID_HEIGHT);
    // 0-290
    return columnIndex * SQUARE_SIZE;
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
    const maxAttempts = MAX_RANDOM_ATTEMPTS_LOOP;
    let attempts = 0;
    do {
        position = getRandomPoint();
        attempts++;
    } while (attempts < maxAttempts && takenPoints.some((point) => isSamePoint(point, position)))

    if (attempts >= maxAttempts) {
        throw new Error(EXCEPTION_NO_POINTS_AVAILABLE);
    }
    return position;
}

export function getSnakeCopy(snake) {
    return snake.map(segment => ({ x: segment.x, y: segment.y }));
}

export function getRandomPointDirection() {
    const directions = [
        //up
        { x: 0, y: -SQUARE_SIZE },
        //down
        { x: 0, y: SQUARE_SIZE },
        //right
        { x: SQUARE_SIZE, y: 0 },
        //left
        { x: -SQUARE_SIZE, y: 0 },
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
