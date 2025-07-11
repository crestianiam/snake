# Canvas Methods Reference (AI GENERATED)

This document provides a comprehensive reference for all HTML5 Canvas methods used in the Snake game project, with brief explanations and usage examples.

## Canvas Context Setup

### `getContext(contextType)`
- **Purpose**: Returns a drawing context on the canvas
- **Usage**: `canvas.getContext("2d")` - Gets the 2D rendering context
- **Returns**: CanvasRenderingContext2D object or null if not supported

```javascript
const ctx = canvas.getContext("2d");
```

## Drawing Methods

### `fillRect(x, y, width, height)`
- **Purpose**: Draws a filled rectangle
- **Parameters**: 
  - `x`: X-coordinate of the top-left corner
  - `y`: Y-coordinate of the top-left corner  
  - `width`: Width of the rectangle
  - `height`: Height of the rectangle
- **Usage**: Used for drawing snake segments and food

```javascript
ctx.fillRect(100, 50, 20, 20); // Draws a 20x20 square at (100,50)
```

### `strokeRect(x, y, width, height)`
- **Purpose**: Draws a rectangle outline (border only)
- **Parameters**: Same as fillRect
- **Usage**: Used for drawing borders around snake segments

```javascript
ctx.strokeRect(100, 50, 20, 20); // Draws border of 20x20 square at (100,50)
```

### `fillText(text, x, y)`
- **Purpose**: Draws filled text at the given coordinates
- **Parameters**:
  - `text`: String to draw
  - `x`: X-coordinate where text starts
  - `y`: Y-coordinate of the text baseline
- **Usage**: Used for displaying game over messages

```javascript
ctx.fillText("GAME OVER", 90, 150);
```

### `clearRect(x, y, width, height)`
- **Purpose**: Clears the specified rectangular area, making it fully transparent
- **Parameters**: Same as fillRect
- **Usage**: Used to clear the entire canvas before redrawing

```javascript
ctx.clearRect(0, 0, canvas.width, canvas.height); // Clears entire canvas
```

## Style Properties

### `fillStyle`
- **Purpose**: Sets the color, gradient, or pattern for filling shapes
- **Values**: Color string, gradient object, or pattern object
- **Usage**: Set before calling fill methods

```javascript
ctx.fillStyle = "red";     // Solid color
ctx.fillStyle = "#FF0000"; // Hex color
ctx.fillStyle = "rgb(255, 0, 0)"; // RGB color
```

### `strokeStyle`
- **Purpose**: Sets the color, gradient, or pattern for shape outlines
- **Values**: Same as fillStyle
- **Usage**: Set before calling stroke methods

```javascript
ctx.strokeStyle = "black";
ctx.strokeStyle = "#000000";
```

### `lineWidth`
- **Purpose**: Sets the thickness of lines and borders
- **Values**: Number (in pixels)
- **Usage**: Set before drawing strokes

```javascript
ctx.lineWidth = 2; // 2-pixel thick borders
```

### `font`
- **Purpose**: Sets the font properties for text drawing
- **Values**: String in CSS font format
- **Usage**: Set before drawing text

```javascript
ctx.font = "20px Arial";           // Size and family
ctx.font = "bold 16px sans-serif"; // Weight, size, and family
```

## Canvas Properties

### `canvas.width` and `canvas.height`
- **Purpose**: Get or set the canvas dimensions
- **Usage**: Used for boundary checking and clearing operations

```javascript
// Get dimensions
const w = canvas.width;
const h = canvas.height;

// Set dimensions (also clears canvas)
canvas.width = 400;
canvas.height = 400;
```

## Method Chaining and Best Practices

### Typical Drawing Sequence
1. Set style properties (`fillStyle`, `strokeStyle`, `lineWidth`, `font`)
2. Call drawing methods (`fillRect`, `strokeRect`, `fillText`)
3. Clear canvas when needed (`clearRect`)

### Example: Drawing a Snake Segment
```javascript
// Set colors and border
ctx.fillStyle = "green";
ctx.strokeStyle = "black";
ctx.lineWidth = 1;

// Draw filled rectangle
ctx.fillRect(x, y, 10, 10);

// Draw border
ctx.strokeRect(x, y, 10, 10);
```

### Example: Drawing Food
```javascript
ctx.fillStyle = "pink";
ctx.fillRect(position.x, position.y, 10, 10);
```

### Example: Drawing Game Over Text
```javascript
ctx.fillStyle = "black";
ctx.font = "20px Arial";
ctx.fillText("GAME OVER", 90, 150);
```

## Performance Considerations

1. **Minimize Context State Changes**: Group operations that use the same styles
2. **Use clearRect Efficiently**: Only clear the areas that need updating (or entire canvas for simplicity)
3. **Batch Similar Operations**: Set style once, then draw multiple shapes
4. **Canvas Dimensions**: Avoid changing canvas size frequently as it clears the canvas

## Browser Compatibility

All methods used in this project are part of the HTML5 Canvas API and are supported in all modern browsers:
- Chrome 4+
- Firefox 3.6+
- Safari 3.1+
- Internet Explorer 9+
- Edge (all versions)

## Error Handling

Always check if the context is available before using:

```javascript
const ctx = canvas.getContext("2d");
if (!ctx) {
    console.error("2D context not available");
    return;
}
```