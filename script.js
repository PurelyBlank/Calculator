let expression_result = 0;
let number = 0;
let operator_type = null;

const OPERATORS = ['/', '-', '+', 'x', '%'];
const NUMBERS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const DECIMAL_SYMBOL = '.';
const PLUS_MINUS = '+/-';


function add(a, b) {
    return a + b;
}


function subtract(a, b) {
    return a - b;
}


function multiply(a, b) {
    return a * b;
}


function divide(a, b) {
    return a / b;
}


function modulo(a, b) {
    return a % b;
}


function operate(a, b, operation) {
    switch (operation) {
        case ('+'):
            return add(a, b);
        case ('-'):
            return subtract(a, b);
        case ('x'):
            return multiply(a, b);
        case ('/'):
            return divide(a, b);
        case ('%'):
            return modulo(a, b);
        default:
            console.log("No operation available for operator: " + operation);
            return null;
    }
}


function displayExpression(expression) {
    const exp = document.querySelector(".expression");
    exp.textContent = expression;
}


function displayResult(result) {
    const res = document.querySelector(".result");
    res.textContent = result;
}


function parseButton(value) {
    
}


const buttons = document.querySelectorAll(".btn");
buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        console.log(expression_result, number, operator_type);
        const value = event.target.value;

    });
});


document.addEventListener("DOMContentLoaded", () => {
    displayResult(0);
    displayExpression(0);
});