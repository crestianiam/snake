/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("gameCanvas");

/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext("2d");

if (!ctx) {
    console.error("2D context of canvas is not available");
}

ctx.fillStyle = "green";
ctx.fillRect(10, 10, 50, 50);

ctx.fillStyle = "red";
ctx.fillRect(30, 30, 50, 50);

ctx.fillRect(0, 0, canvas.width, canvas.height);

let snake = [{ x: 150, y: 150 }, { x: 140, y: 150 }, { x: 130, y: 150 }, { x: 120, y: 150 }, { x: 110, y: 150 },];
