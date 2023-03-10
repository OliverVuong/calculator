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
let displayStr;
let currentVal = 0;
let runningTotal;
let operator;
let startNewNumber;
let hasOperatorSelected;

const OPERATOR = "OPERATOR";
const NUMBER = "NUMBER";
const EQUALS = "EQUALS"
let lastInput = NUMBER;

resetHelpers();
resetDisplay();

const numberBtns = document.querySelectorAll('.number');
numberBtns.forEach(button => {
    button.addEventListener('click', () => {
        //start of a new number
        if(lastInput === OPERATOR || lastInput === EQUALS){
            displayStr = "";
            startNewNumber = false;
            currentVal = 0;
        }
        displayStr += button.id;
        currentVal = (Number(currentVal) * 10) + Number(button.id);
        display.textContent = currentVal;
        hasOperatorSelected = false;
        lastInput = NUMBER;
    });
});


/////////////////////////////////////////////

const operatorBtns = document.querySelectorAll('.operator');
operatorBtns.forEach(button => {
    button.addEventListener('click', () => {

        if(lastInput === EQUALS){
            //do nothing
        }else if(runningTotal){
            runningTotal = operate(operator, runningTotal, Number(displayStr));
            display.textContent = runningTotal;    
        } else {
            runningTotal = Number(displayStr);
        }
        operator = button.classList[0];
        lastInput = OPERATOR;
    })
})

const equalsBtn = document.querySelector('.equals');
equalsBtn.addEventListener('click', () => {
    let ans = operate(operator, runningTotal, Number(displayStr));
    display.textContent = ans;
    currentVal = ans;
    runningTotal = ans;
    lastInput = EQUALS;
    //resetHelpers();
})

///////////////////////////////////////////////

const clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', ()=> {
    currentVal = 0;
    resetHelpers();
    resetDisplay();
})

///////////////////////////////////////////////

//resets helper variables to ready for a new equation
function resetHelpers(){
    //currentVal = 0;
    startNewNumber = true;
    operator = undefined;
    runningTotal = 0;
    hasOperatorSelected = false;
    lastInput = NUMBER;
}

function resetDisplay(){
    displayStr = "0";
    display.textContent = displayStr;
}

/*
if display === 0 &&& clickBtn0
    do nothing


*/