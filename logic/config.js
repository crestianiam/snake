//remind possible env variable
export const CANVAS_WIDTH = 300;
export const CANVAS_HEIGHT = 300;
export const CANVAS_TEXT_STARTING_POSITION = { x: 90, y: 150 }
export const SQUARE_HEIGHT = 10;
export const SQUARE_WIDTH = 10;
export const BORDER_WIDTH = 1;

//remind check
export const CANVAS_TOTAL_X_POSITIONS = (CANVAS_WIDTH / SQUARE_WIDTH) - 1;
export const CANVAS_TOTAL_Y_POSITIONS = (CANVAS_HEIGHT / SQUARE_HEIGHT) - 1;

//remind check
export const MAX_SNAKE_LENGTH = CANVAS_WIDTH * CANVAS_HEIGHT - 1;

export const CLR_SNAKE_HEAD = "red";
export const CLR_SNAKE_BODY = "green";
export const CLR_BORDER_SNAKE = "black";
export const SNAKE_SEGMENT_WIDTH = SQUARE_WIDTH;
export const SNAKE_SEGMENT_HEIGHT = SQUARE_HEIGHT;

export const CLR_FOOD = "pink";
export const FOOD_HEIGHT = SQUARE_HEIGHT;
export const FOOD_WIDTH = SQUARE_WIDTH;

//gameState default values
export const STARTING_FOOD_POSITION = { x: 20, y: 20 };
export const ORIGINAL_SNAKE = [{ x: 100, y: 150 }, { x: 110, y: 150 }, { x: 120, y: 150 }, { x: 130, y: 150 }, { x: 140, y: 150 }, { x: 150, y: 150 }];
export const STARTING_SCORE = 0;

//canvas html for text variables
export const CANVAS_TEXT_FONT = "Arial";
export const CANVAS_TEXT_SIZE = "20px";
export const CANVAS_TEXT_CLR = "black";

//labels
export const LABEL_COLLISION_WITH_WALL = "Collision with wall detected!";
export const LABEL_COLLISION_WITH_SNAKE = "Collision with snake detected!";
export const LABEL_GOING_BACKWARDS_NOT_ALLOWED = "Going backwards is not allowed!";
export const LABEL_DIRECTION_NOT_VALID = "Direction not valid!";
export const LABEL_GAME_STARTED = "Game started!";
export const LABEL_GAME_OVER = "Game over";
export const LABEL_TOTAL_SCORE = "Total score";
