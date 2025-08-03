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

### Using Custom Images

The game supports the use of custom images for various game elements. If you wish to replace the default graphics (such as the snake's head or the food), you can do so easily.

To use your own custom images, follow these simple steps:

1.  Create a folder named `local` inside the `assets` directory. The full path will be **`assets/local`**.

2.  Save your custom images inside this folder, using the specific file names listed below.

The game will first look for images in the `local` folder. If a file is not found, it will automatically use the default image, ensuring the application always runs smoothly.

| Element | Required File Name | Example Usage |
| :--- | :--- | :--- |
| Welcome message | `welcome.png` | `assets/images/local/welcome.png` |
| Snake Head (up) | `headUp.png` | `assets/images/local/headUp.png` |
| Snake Head (down) | `headDown.png` | `assets/images/local/headDown.png` |
| Snake Head (right) | `headRight.png` | `assets/images/local/headRight.png` |
| Snake Head (left) | `headLeft.png` | `assets/images/local/headLeft.png` |
| Food | `food.png` | `assets/images/local/food.png` |
| Enemy | `enemy.png` | `assets/images/local/enemy.png` |
| Game Over message | `gameOver.png` | `assets/images/local/gameOver.png` |

**Note**: Make sure that the file names and extensions (`.png`, `.jpg`, etc.) match exactly as required. If a local image does not exist, the game will seamlessly fall back to its default counterpart.

## Notes

- The snake body uses a smooth color gradient or random bright colors.
- Food squares get random bright colors on every spawn.
- The dashboard is drawn on the canvas, showing score and game messages.