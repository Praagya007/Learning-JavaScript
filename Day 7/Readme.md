# Calculator Application

A modern, feature-rich calculator built with vanilla JavaScript, HTML, and CSS. This calculator supports basic arithmetic operations, keyboard input, theme toggling, and persistent theme preferences.

## Features

- ✨ **Basic Operations**: Addition, subtraction, multiplication, and division
- 🔢 **Advanced Functions**: Percentage calculations and parentheses support
- ⌨️ **Keyboard Support**: Full keyboard input for seamless user experience
- 🌓 **Theme Toggle**: Switch between light and dark modes with persistent preferences
- 🎯 **Smart Input Handling**: Prevents leading zeros and handles decimal points intelligently
- ⚡ **Error Handling**: Graceful handling of division by zero and invalid expressions
- 💾 **LocalStorage**: Remembers your theme preference across sessions
- 🎨 **Clean UI**: Modern, responsive design that works on all devices

## Demo

Try these operations:
- Basic: `5 + 3 * 2`
- Parentheses: `(10 + 5) / 3`
- Percentage: `50 * 20%`
- Decimals: `3.14 * 2`

## Tech Stack

- **HTML5**: Semantic structure
- **CSS3**: Modern styling with theme support
- **JavaScript (ES6)**: Vanilla JavaScript
- **Math.js**: Expression evaluation library
- **LocalStorage API**: Theme persistence

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Praagya007/Learning-JavaScript.git
```

2. Navigate to the project directory:
```bash
cd calculator-app
```

3. Open `index.html` in your browser:
```bash
# For macOS
open index.html

# For Windows
start index.html

# For Linux
xdg-open index.html
```

## Usage

### Mouse/Touch Input

- Click number buttons (0-9) to input numbers
- Click operator buttons (+, -, *, /, %, (, )) for operations
- Click `.` for decimal point
- Click `=` to calculate the result
- Click `C` to clear all
- Click `⌫` (backspace) to delete the last character
- Toggle the theme switch to change between light and dark modes

### Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `0-9` | Input numbers |
| `+` `-` `*` `/` | Basic operators |
| `%` | Percentage |
| `(` `)` | Parentheses |
| `.` | Decimal point |
| `Enter` or `=` | Calculate result |
| `Backspace` | Delete last character |
| `Delete` or `Escape` | Clear all |
| `Shift + T` | Toggle theme |

## Code Structure

### Core Functions

#### `updateDisplay()`
Updates the calculator display with the current expression.

#### `handleNumber(num)`
Handles number input with smart zero handling:
- Prevents multiple leading zeros
- Replaces leading zero when a new number is entered
- Resets on error state

#### `handleOperator(op)`
Manages operator input:
- Prevents consecutive operators (replaces the last one)
- Handles special operators like parentheses and percentage
- Validates input state

#### `handleDecimal()`
Smart decimal point handling:
- Prevents multiple decimals in the same number
- Adds "0." after operators
- Handles initial state correctly

#### `deletePrevious()`
Removes the last character from the expression:
- Resets to "0" if only one character remains
- Clears error state

#### `clearAll()`
Resets the calculator to initial state (displays "0").

#### `calculate()`
Evaluates the expression using Math.js:
- Handles division by zero (checks for infinite results)
- Catches syntax errors and displays "Error"
- Uses `math.evaluate()` for safe expression evaluation

#### `themeToggling()`
Manages theme switching:
- Toggles between light and dark mode
- Saves preference to localStorage
- Updates body classes dynamically

### Event Listeners

**Button Events:**
- Number buttons: Attach click handlers to all `.number` elements
- Operator buttons: Attach click handlers to all `.operator` elements
- Special buttons: Individual handlers for decimal, equal, clear, and delete

**Keyboard Events:**
- Number keys: Direct input
- Operator keys: Symbol detection
- Function keys: Calculate, delete, and clear
- Theme toggle: `Shift + T` combination

**Theme Persistence:**
- Loads saved theme from localStorage on page load
- Applies appropriate theme class to body
- Syncs theme toggle checkbox state

## Key Learning Points

### 1. Smart Input Handling
The calculator prevents common input errors:
```javascript
const lastPart = expression.split(/[-+*/()%]/).pop();
if (lastPart === "0" && num === "0") return; // Prevent multiple zeros
```

### 2. Operator Validation
Prevents consecutive operators by replacing the last one:
```javascript
if (operators.includes(lastChar)) {
  expression = expression.slice(0, -1) + op;
}
```

### 3. Decimal Point Logic
Ensures only one decimal per number:
```javascript
const lastPart = expression.split(/[-+*/()%]/).pop();
if (!lastPart.includes(".")) {
  expression += ".";
}
```

### 4. Error Handling
Gracefully handles calculation errors:
```javascript
if (!isFinite(result)) {
  expression = "Error"; // Division by zero
}
```

### 5. Theme Persistence
Uses localStorage to remember user preferences:
```javascript
localStorage.setItem("theme", isDark ? "dark" : "light");
```

## Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Opera (latest)

**Note**: Requires Math.js library for expression evaluation.

## Dependencies

This calculator uses the Math.js library for safe expression evaluation:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/mathjs/11.11.0/math.min.js"></script>
```

## Future Enhancements

- 📊 **History Feature**: Keep track of previous calculations
- 🧮 **Scientific Mode**: Add trigonometric and logarithmic functions
- 📱 **PWA Support**: Make it installable as a Progressive Web App
- 🎵 **Sound Effects**: Add audio feedback for button presses
- 📐 **Unit Converter**: Integrate unit conversion functionality
- 🌍 **Localization**: Support for multiple languages and number formats
- ♿ **Accessibility**: Improve ARIA labels and screen reader support
- 📈 **Graphing**: Add basic graphing capabilities for functions

## Common Issues & Solutions

### Issue: Theme doesn't persist
**Solution**: Ensure localStorage is enabled in your browser and the site isn't in incognito/private mode.

### Issue: Keyboard input not working
**Solution**: Make sure the calculator has focus by clicking on it first.

### Issue: Math.js not loading
**Solution**: Check your internet connection or download Math.js locally and update the script source.

### Issue: Expression shows "Error"
**Solution**: Check for invalid syntax like multiple operators or unmatched parentheses. Press Clear to reset.

## Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests
- Improve documentation

## License

This project is open source and available under the MIT License.

## Acknowledgments

- Built with vanilla JavaScript for maximum compatibility
- Uses Math.js for robust mathematical expression evaluation
- Inspired by modern calculator designs with focus on user experience

---

Built with ❤️ using JavaScript, HTML5, and CSS3
