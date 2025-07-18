//remind possible env variable
//todo must be a square
export const CANVAS_WIDTH = 300;
export const CANVAS_HEIGHT = 300;
export const CANVAS_TEXT_STARTING_POSITION = { x: 90, y: 150 }
export const SQUARE_SIZE = 10;
export const BORDER_WIDTH = 1;


//remind check
export const CANVAS_TOTAL_X_POSITIONS = (CANVAS_WIDTH / SQUARE_SIZE) - 1;
export const CANVAS_TOTAL_Y_POSITIONS = (CANVAS_HEIGHT / SQUARE_SIZE) - 1;

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
export const LABEL_SNAKE_LENGTH_NEGATIVE = "The length of the snake must be greater than zero!";
export const LABEL_SNAKE_LENGTH_BIG = "The length of the snake exceded the space available in the board!";