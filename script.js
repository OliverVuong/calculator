function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function operate(operator = 'add', a = 0, b = 0){
    if(operator === 'add'){
        return add(a, b);
    } else if(operator === 'subtract'){
        return subtract(a, b);
    } else if(operator === 'multiply'){
        return multiply(a, b);
    } else if(operator === 'divide'){
        return divide(a, b);
    }
}

////////////////////////////////////////

const display = document.querySelector('.display');
let displayStr = "";
let runningTotal = undefined;
let operator = undefined;
let startNewNumber = false;

const numberBtns = document.querySelectorAll('.number');
numberBtns.forEach(button => {
    button.addEventListener('click', () => {
        if(startNewNumber){
            displayStr = "";
            startNewNumber = false;
        }
        displayStr += button.id;
        display.textContent = displayStr;
    });
});