let expression_result = 0;
let number = 0;
let operator_type = null;

const OPERATORS = ['/', '-', '+', 'x', '%'];
const NUMBERS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const DECIMAL_SYMBOL = '.';
const PLUS_MINUS = '+/-';
const ROUND_DECIMAL = 10;
const UPPER_BOUND_NUMBER_LEN = 16;
const ERROR_OUT_OF_BOUNDS = "ERROR: Number too long...";


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


function clearAll() {
    expression_result = 0;
    number = 0;
    operator_type = null;
    displayExpression(0);
    displayResult(0);
}


function clearChar() {
    let tempNum = convertToString(number);
    if (tempNum != 0) {
        clearLastChar = tempNum.slice(0, tempNum.length - 1);
        displayExpression(clearLastChar);
        number = clearLastChar;
    }
    else if (number === "") {
        displayExpression(0);
        number = 0;
    }
}


function convertToString(value) {
    return String(value);
}


function convertToFloat(value) {
    intValue = parseFloat(value);
    if (isNaN(intValue)) {
        return null;
    }
    if (convertToString(intValue).length >= UPPER_BOUND_NUMBER_LEN) {
        return 0;
    }
    return intValue;
}


function formNumber(num) {
    return convertToFloat(convertToString(number) + num);
}


function parseNumber(num) {
    if (!operator_type) {
        newNum = number == 0 ? convertToFloat(num) : formNumber(num);
        if (newNum === 0 && number !== 0) 
            displayExpression(ERROR_OUT_OF_BOUNDS);
        else
            displayExpression(newNum);
        number = newNum;
    } else {
        
    }
}


function checkDecimal(value) {
    let stringNum = convertToString(number);
    let stringNumLen = stringNum.length;
    return value === DECIMAL_SYMBOL && !stringNum.includes(DECIMAL_SYMBOL) && stringNumLen > 0 && stringNum[stringNum.length - 1] !== ".";
}


function checkPositiveNegative(value) {
    return value === PLUS_MINUS;
}


function convertPositiveNegative() {
    if (number != 0) {
        let stringNum = convertToString(number);
        if (stringNum[0] === "-") {
            number = convertToFloat(stringNum.slice(1));
        }
        else {
            number = convertToFloat("-" + stringNum);
        }
    }
}


function parseButton(value) {
    if (value === "AC") {
        clearAll(); 
    }
    else if (value === "C") {
        clearChar();
    }
    else if (NUMBERS.includes(value)) {
        parseNumber(value);
    }
    else if (checkDecimal(value)) {
        number = number + '.';
        displayExpression(number);
    }
    else if (checkPositiveNegative(value)) {
        convertPositiveNegative();
        displayExpression(number);
    }
}


const buttons = document.querySelectorAll(".btn");
buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        console.log(expression_result, number, operator_type);
        const value = event.target.value;
        parseButton(value);
    });
});


document.addEventListener("DOMContentLoaded", () => {
    displayResult(0);
    displayExpression(0);
});