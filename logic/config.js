//remind fixed vars dimensions (ENV)
//todo must be a square
export const CANVAS_WIDTH = 500;
export const CANVAS_HEIGHT = 500;
//min 10 and multiple of CANVAS_WIDTH and CANVAS_HEIGHT
export const SQUARE_SIZE = 25;

//inferred vars dimensions
export const RADIO_SQUARE_BORDER = 10;
export const GRID_WIDTH = (CANVAS_WIDTH / SQUARE_SIZE);
export const GRID_HEIGHT = (CANVAS_HEIGHT / SQUARE_SIZE);
export const CANVAS_TEXT_STARTING_POSITION = { x: 90, y: 150 };//todo check

export const BORDER_WIDTH = SQUARE_SIZE / RADIO_SQUARE_BORDER;

//utility functions
export const MAX_RANDOM_ATTEMPTS_LOOP = 100;

//remind check
export const MAX_SNAKE_LENGTH = CANVAS_WIDTH * CANVAS_HEIGHT - 1;

export const CLR_SNAKE_HEAD = "black";
export const CLR_SNAKE_BODY = "green";
export const CLR_BORDER_SNAKE = "black";
export const SNAKE_SEGMENT_WIDTH = SQUARE_SIZE;
export const SNAKE_SEGMENT_HEIGHT = SQUARE_SIZE;

export const CLR_FOOD = "pink";
export const FOOD_HEIGHT = SQUARE_SIZE;
export const FOOD_WIDTH = SQUARE_SIZE;

//gameState default values
export const STARTING_SCORE = 0;
export const STARTING_SPEED = 200;

//canvas html for text variables
export const CANVAS_TEXT_FONT = "Arial";
export const CANVAS_TEXT_SIZE = "20px";
export const CANVAS_TEXT_CLR = "black";
export const CANVAS_NEW_LINE_VERTICAL_SPACE = 20;

//html id
export const HTML_CURRENT_SCORE_ID = "currentScore";

//labels
export const LABEL_COLLISION_WITH_WALL = "Collision with wall detected!";
export const LABEL_COLLISION_WITH_SNAKE = "Collision with snake detected!";
export const LABEL_GOING_BACKWARDS_NOT_ALLOWED = "Going backwards is not allowed!";
export const LABEL_DIRECTION_NOT_VALID = "Direction not valid!";
export const LABEL_GAME_STARTED = "Game started!";
export const LABEL_GAME_OVER = "Game over";
export const LABEL_TOTAL_SCORE = "Total score";

//css effects
export const FLASH_SUCCESS = "success";
export const FLASH_COLLISION = "collision";
export const FLASH_DEFAULT = "default";

export const FLASH_CANVAS_CLR = new Map([
    [FLASH_SUCCESS, "greenyellow"],
    [FLASH_COLLISION, "red"],
    [FLASH_DEFAULT, "gray"]
]);