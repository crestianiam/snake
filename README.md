# Snake Game

A simple and fun Snake game built with HTML5 Canvas and JavaScript.

## Features

- Classic snake gameplay with smooth controls.
- Colorful snake with a gradient effect on the body.
- Random bright colors for food squares.
- Dashboard with score display and start button.
- Easy to customize colors and sizes via config files.

## How to Run

1. Clone the repo.
2. Open `index.html` in a modern web browser.
3. Use the play button or keyboard controls to start and play.

## Project Structure

- `index.html` — main HTML file with canvas and score display.
- `styles.css` — page styling including layout and colors.
- `reset.css` — CSS reset to ensure consistent styles.
- `main.js` — main JavaScript logic and game loop.
- `/utils`  — folder with utility functions and drawing functions (like snake, food, dashboard).
- `/utils/config.js` — constants for sizes, colors, and positions.

## Customize

- Change snake colors and effects in `drawSnake` function.
- Modify food appearance in `drawFood`.
- Adjust canvas size and button position in `utils/config.js`.

## Notes

- The snake body uses a smooth color gradient or random bright colors.
- Food squares get random bright colors on every spawn.
- The dashboard is drawn on the canvas, showing score and game messages.