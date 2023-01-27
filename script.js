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


/////////////////////////////////////////////

const operatorBtns = document.querySelectorAll('.operator');
operatorBtns.forEach(button => {
    button.addEventListener('click', () => {
        startNewNumber = true;
        runningTotal = Number(displayStr);
        operator = button.classList[0];
    })
})

const equalsBtn = document.querySelector('.equals');
equalsBtn.addEventListener('click', () => {
    startNewNumber = true;
    display.textContent = operate(operator, runningTotal, Number(displayStr));;
    runningTotal = 0;
})