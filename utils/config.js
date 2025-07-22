//fixed vars dimensions
export const CANVAS_WIDTH = 1000;
export const CANVAS_HEIGHT = 600;
export const SQUARE_SIZE = 50; //min 10 and multiple of CANVAS_WIDTH and CANVAS_HEIGHT
export const RADIO_SQUARE_BORDER = 10;

//inferred vars dimensions
export const GRID_WIDTH = Math.floor(CANVAS_WIDTH / SQUARE_SIZE);
export const GRID_HEIGHT = Math.floor(CANVAS_HEIGHT / SQUARE_SIZE);
export const TOTAL_SQUARES = GRID_WIDTH * GRID_HEIGHT;
export const CANVAS_TEXT_STARTING_POSITION = { x: 90, y: 150 };//todo check use ctx.textAlign
export const BORDER_WIDTH = SQUARE_SIZE / RADIO_SQUARE_BORDER;
export const MAX_SNAKE_LENGTH = TOTAL_SQUARES - 1;
export const MAX_RANDOM_ATTEMPTS_LOOP = TOTAL_SQUARES - 1;

//labels
export const LABEL_COLLISION_WITH_WALL = "Collision with wall detected";
export const LABEL_COLLISION_WITH_SNAKE = "Collision with snake detected";
export const LABEL_GOING_BACKWARDS_NOT_ALLOWED = "Going backwards is not allowed";
export const LABEL_DIRECTION_NOT_VALID = "Direction not valid";
export const LABEL_GAME_STARTED = "Game started!";
export const LABEL_GAME_OVER = "Game over";
export const LABEL_GAME_WIN = "Game win";
export const LABEL_TOTAL_SCORE = "Total score";

//exceptions
export const EXCEPTION_NO_POINTS_AVAILABLE = "No points available";

