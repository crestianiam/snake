//fixed vars dimensions, mulitple of 2, 5, 4, 10, and sqaure size
export const GAME_WIDTH = 1280;
export const GAME_HEIGHT = 600;
export const SQUARE_SIZE = 40; //min 10 and multiple of GAME_WIDTH and GAME_HEIGHT
export const RADIO_SQUARE_BORDER = 10;

//inferred vars dimensions
export const GRID_WIDTH = Math.floor(GAME_WIDTH / SQUARE_SIZE);//32
export const GRID_HEIGHT = Math.floor(GAME_HEIGHT / SQUARE_SIZE);//15
export const TOTAL_SQUARES = GRID_WIDTH * GRID_HEIGHT;//480
export const CANVAS_TEXT_STARTING_POSITION = { x: 90, y: 150 };//todo check use ctx.textAlign
export const BORDER_WIDTH = SQUARE_SIZE / RADIO_SQUARE_BORDER;
export const MAX_SNAKE_LENGTH = TOTAL_SQUARES / 2;
export const MAX_RANDOM_ATTEMPTS_LOOP = TOTAL_SQUARES / 2;

//dashboard items
export const CANVAS_BORDER_LINE_SIZE = 20;
export const PLAY_BTN_WIDTH = SQUARE_SIZE * 5;
export const PLAY_BTN_HEIGHT = SQUARE_SIZE * 2;
export const PLAY_BTN_X = (GAME_WIDTH / 2) - PLAY_BTN_WIDTH / 2;
export const PLAY_BTN_Y = (GAME_HEIGHT / 2) - PLAY_BTN_HEIGHT / 2;

//labels
export const LABEL_COLLISION_WITH_WALL = "Collision with wall detected";
export const LABEL_COLLISION_WITH_SNAKE = "Collision with snake detected";
export const LABEL_GOING_BACKWARDS_NOT_ALLOWED = "Going backwards is not allowed";
export const LABEL_DIRECTION_NOT_VALID = "Direction not valid";
export const LABEL_GAME_STARTED = "Game started!";
export const LABEL_GAME_OVER = "Game over";
export const LABEL_GAME_WIN = "Game win";
export const LABEL_TOTAL_SCORE = "Total score";
export const LABEL_GAME_CANNOT_START = "Cannot start the game: conditions not met";

//exceptions
export const EXCEPTION_NO_POINTS_AVAILABLE = "No points available";

