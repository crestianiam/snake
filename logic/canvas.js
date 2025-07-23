import { GAME_WIDTH, GAME_HEIGHT } from "../utils/config.js";;

/** @type {HTMLCanvasElement} */
export const canvas = document.getElementById("gameCanvas");

/** @type {CanvasRenderingContext2D} */
export const ctx = canvas.getContext("2d");

canvas.width = GAME_WIDTH;
canvas.height = GAME_HEIGHT;