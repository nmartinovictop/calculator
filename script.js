
function add(a,b) {
    return parseInt(a) + parseInt(b);
}

function subtract(a,b) {
    return a - b
}

function multiply(a,b) {
    return a * b
}

function divide(a,b) {
    return a / b
}

function operate(operator,num1,num2) {
    if (operator == '+') {
        return add(num1,num2)
    } else if (operator == '-') {
        return subtract(num1,num2)
    } else if (operator == '*') {
        return multiply(num1,num2)
    } else {
        return divide(num1,num2)
    }
}

let nums = document.querySelectorAll('.numpad')
let operators = document.querySelectorAll('.operator')
let equal = document.querySelector('.equals')
let display = document.querySelector('.display')
let content = document.createElement('p');
display.appendChild(content)


let num1 = '';
let num2 = '';
let currentOp = '';
let result = '';

equal.addEventListener('click',calculate)

nums.forEach( num => {
    num.addEventListener('click', numCollector)
});

operators.forEach (op => {
    op.addEventListener('click',() => currentOp += op.textContent)
});


function numCollector() {
    if (currentOp === '') { 
        num1 += this.textContent
    } else {
        num2 += this.textContent
    }
}

function calculate() {
   result = operate(currentOp,num1,num2);
    num1 = result;
    num2 = '';
    currentOp = ''
    content.textContent = result;
    return result
}
