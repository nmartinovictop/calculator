
function add(a,b) {
    return a + b;
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
let num1 = '';
let num2 = '';
let currentOp = '';

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
   return operate(currentOp,num1,num2)

}
