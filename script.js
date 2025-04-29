// Display area of the calculator
let display = document.getElementById("display");

// Handles the button presses and updates the display
function addToDisplay(value) {
    // Replace 'x' with '*' because JavaScript uses * for multiplication
    if (value === 'x') {
        display.value += '*';
    } 
    // Replace '÷' with '/' because JavaScript uses / for division
    else if (value === '÷') {
        display.value += '/';
    } 
    // Adds numbers and other symbols (like +, -, .) directly to the display
    else {
        display.value += value;
    }
}

// Clears everything from the display
function clearDisplay() {
    display.value = '';
}

// Calculates whatever is on the display
function calculateResult() {
    try {
        // Uses eval() to calculate the answer
        display.value = eval(display.value);
    } catch (error) {
        // Shows an error message
        display.value = 'Error';
    }
}

