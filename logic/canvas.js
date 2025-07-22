import { CANVAS_WIDTH, CANVAS_HEIGHT } from "../utils/config.js";;

/** @type {HTMLCanvasElement} */
export const canvas = document.getElementById("gameCanvas");

/** @type {CanvasRenderingContext2D} */
export const ctx = canvas.getContext("2d");

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;