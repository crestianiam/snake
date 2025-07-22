//html ids
const HTML_CURRENT_SCORE_ID = "currentScore";

export function updateScoreDisplay(score) {
    document.getElementById(HTML_CURRENT_SCORE_ID).innerText = score;
}