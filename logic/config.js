//remind possible env variable
export const CANVAS_WIDTH = 300;
export const CANVAS_HEIGHT = 300;

export const CANVAS_TOTAL_X_POSITIONS = (CANVAS_WIDTH / 10) - 1;
export const CANVAS_TOTAL_Y_POSITIONS = (CANVAS_HEIGHT / 10) - 1;

export const MAX_SNAKE_LENGTH = CANVAS_WIDTH * CANVAS_HEIGHT - 1;

export const CLR_SNAKE_HEAD = "red";
export const CLR_SNAKE_BODY = "green";
export const CLR_BORDER_SNAKE = "black";
export const BORDER_WIDTH = 1;
export const SNAKE_SEGMENT_WIDTH = 10;
export const SNAKE_SEGMENT_HEIGHT = 10;

export const CLR_FOOD = "pink";
export const FOOD_HEIGHT = 10;
export const FOOD_WIDTH = 10;
export const STARTING_FOOD_POSITION = { x: 20, y: 20 };

export const ORIGINAL_SNAKE = [{ x: 100, y: 150 }, { x: 110, y: 150 }, { x: 120, y: 150 }, { x: 130, y: 150 }, { x: 140, y: 150 }, { x: 150, y: 150 }];
export const STARTING_SCORE = 0;