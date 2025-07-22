const eatSound = new Audio("assets/sounds/eat.mp3");
const collisionSound = new Audio("assets/sounds/collision.mp3");
const victorySound = new Audio("assets/sounds/victory.mp3");

export function playEatSound() {
    eatSound.currentTime = 0;
    eatSound.play();
}

export function playCollisionSound() {
    collisionSound.currentTime = 0;
    collisionSound.play();
}

export function playVictorySound() {
    victorySound.currentTime = 0;
    victorySound.play();
}