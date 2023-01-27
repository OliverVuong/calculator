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
let hasOperatorSelected = false;

const numberBtns = document.querySelectorAll('.number');
numberBtns.forEach(button => {
    button.addEventListener('click', () => {
        if(startNewNumber){
            displayStr = "";
            startNewNumber = false;
        }
        displayStr += button.id;
        display.textContent = displayStr;
        hasOperatorSelected = false;
    });
});


/////////////////////////////////////////////

const operatorBtns = document.querySelectorAll('.operator');
operatorBtns.forEach(button => {
    button.addEventListener('click', () => {
        startNewNumber = true;

        if(runningTotal){
            runningTotal = operate(operator, runningTotal, Number(displayStr));
            display.textContent = runningTotal;    
        } else {
            runningTotal = Number(displayStr);
        }
        operator = button.classList[0];
        hasOperatorSelected = true;
    })
})

const equalsBtn = document.querySelector('.equals');
equalsBtn.addEventListener('click', () => {
    display.textContent = operate(operator, runningTotal, Number(displayStr));
    resetHelpers();
})

///////////////////////////////////////////////

//resets helper variables to ready for a new equation
function resetHelpers(){
    startNewNumber = true;
    operator = undefined;
    runningTotal = 0;
    hasOperatorSelected = false;
}

function resetDisplay(){
    runningTotal = 0;
    display.textContent = runningTotal;
}