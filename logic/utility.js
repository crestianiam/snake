import { CANVAS_TOTAL_X_POSITIONS, CANVAS_TOTAL_Y_POSITIONS } from "./config.js";

export function isSamePoint(p1, p2) {
    return p1.x === p2.x && p1.y === p2.y;
}

export function getRandomXPoint() {
    const min = 0;
    const max = CANVAS_TOTAL_X_POSITIONS;
    const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomInt * 10;
}

export function getRandomYPoint() {
    const min = 0;
    const max = CANVAS_TOTAL_Y_POSITIONS;
    const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomInt * 10;
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
    document.getElementById('currentScore').innerText = score;
}
