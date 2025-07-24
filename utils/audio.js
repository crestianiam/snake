const eatSound = new Audio("assets/sounds/eat.mp3");
const collisionSound = new Audio("assets/sounds/collision.mp3");
const victorySound = new Audio("assets/sounds/victory.mp3");

const soundtrackRetroSound = new Audio("assets/sounds/soundtrackRetro.mp3");
const soundtrackChillSound = new Audio("assets/sounds/soundtrackChill.mp3");
const soundtrackHardSound = new Audio("assets/sounds/soundtrackHard.mp3");

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

export function playBackgroundMusic(trackNumber) {
    let currentSoundtrack;

    switch (trackNumber) {
        case 0:
            currentSoundtrack = soundtrackRetroSound;
            break;
        case 1:
            currentSoundtrack = soundtrackChillSound;
            break;
        case 2:
            currentSoundtrack = soundtrackHardSound;
            break;
        default:
            return;
    }
    currentSoundtrack.currentTime = 0;
    currentSoundtrack.loop = true;
    currentSoundtrack.play();
}

export function stopBackgroundMusic(trackNumber) {
    let currentSoundtrack;

    switch (trackNumber) {
        case 0:
            currentSoundtrack = soundtrackRetroSound;
            break;
        case 1:
            currentSoundtrack = soundtrackChillSound;
            break;
        case 2:
            currentSoundtrack = soundtrackHardSound;
            break;
        default:
            return;
    }
    currentSoundtrack.pause();
    currentSoundtrack.currentTime = 0;
}

/* export function playSelectedMusic(trackNumber) {
    if (!gameState.isRunning) return;
    stopBackgroundMusic();

    switch (trackNumber) {
        case 1:
            currentSoundtrack = soundtrack1Sound;
            break;
        case 2:
            currentSoundtrack = soundtrack2Sound;
            break;
        case 3:
            currentSoundtrack = soundtrack3Sound;
            break;
        default:
            return;
    }

    currentSoundtrack.currentTime = 0;
    currentSoundtrack.loop = true;
    currentSoundtrack.play();
} */

/* export function playBackgroundMusic2() {
    stopBackgroundMusic();

    currentSoundtrack = soundtrack1Sound;
    currentSoundtrack.currentTime = 0;
    currentSoundtrack.loop = false;
    currentSoundtrack.play();

    currentSoundtrack.onended = () => {
        currentSoundtrack = soundtrack2Sound;
        currentSoundtrack.currentTime = 0;
        currentSoundtrack.loop = false;
        currentSoundtrack.play();

        currentSoundtrack.onended = () => {
            currentSoundtrack = soundtrack3Sound;
            currentSoundtrack.currentTime = 0;
            currentSoundtrack.loop = true;
            currentSoundtrack.play();
        };
    };
}

export function stopBackgroundMusic() {
    if (currentSoundtrack) {
        currentSoundtrack.pause();
        currentSoundtrack.currentTime = 0;
        currentSoundtrack.onended = null;
        currentSoundtrack = null;
    }
}
 */