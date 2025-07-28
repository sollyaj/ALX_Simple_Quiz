// Arithmetic Functions
function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    // Handle division by zero
    if (number2 === 0) {
        return "Error: Division by zero";
    }
    return number1 / number2;
}

// Helper Function to Get Input Values
function getInputValues() {
    const number1 = parseFloat(document.getElementById("number1").value) || 0;
    const number2 = parseFloat(document.getElementById("number2").value) || 0;
    return [number1, number2];
}

// Helper Function to Display Result
function displayResult(value) {
    document.getElementById("calculation-result").textContent = value;
}

// Add Event Listeners
document.getElementById("add").addEventListener("click", function () {
    const [num1, num2] = getInputValues();
    displayResult(add(num1, num2));
});

document.getElementById("subtract").addEventListener("click", function () {
    const [num1, num2] = getInputValues();
    displayResult(subtract(num1, num2));
});

document.getElementById("multiply").addEventListener("click", function () {
    const [num1, num2] = getInputValues();
    displayResult(multiply(num1, num2));
});

document.getElementById("divide").addEventListener("click", function () {
    const [num1, num2] = getInputValues();
    displayResult(divide(num1, num2));
});
