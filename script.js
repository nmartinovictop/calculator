
function add(a,b) {
    return parseFloat(a) + parseFloat(b);
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
let decimal = document.querySelector('.decimal')
let clear = document.querySelector('.clear')
let entries = document.querySelector('.entries')
let data = document.createElement('p')
display.appendChild(content)
entries.appendChild(data)


let num1 = '';
let num2 = '';
let currentOp = '';
let result = '';
// let data = ''


decimal.addEventListener('click',addDecimal)

function addDecimal() {
    if (currentOp === '') {
        num1 += this.textContent
        data.textContent += this.textContent
    } else {
        num2 += this.textContent
        data.textContent += this.textContent
    }

    decimal.removeEventListener('click',addDecimal)

}

equal.addEventListener('click',calculate)

nums.forEach( num => {
    num.addEventListener('click', numCollector)
});


function dog() {
operators.forEach (op => {

    op.addEventListener('click',() => {
    currentOp += op.textContent
    data.textContent += op.textContent
    decimal.addEventListener('click',addDecimal)})

})};

function test() {
    operators.forEach (op => {

        op.removeEventListener('click',() => {
        currentOp += op.textContent
        data.textContent += op.textContent
})})}



function numCollector() {
    if (currentOp === '') { 
        num1 += this.textContent
        data.textContent += this.textContent
        
    } else {
        num2 += this.textContent
        data.textContent += this.textContent
    }

}

function calculate() {
   result = operate(currentOp,num1,num2);
    num1 = result;
    num2 = '';
    currentOp = ''
    content.textContent = result;
    data.textContent += `= ${result}`
    return result
}

clear.addEventListener('click',function() {
    num1 = '';
    num2 = '';
    currentOp = '';
    data.textContent = ''
    content.textContent = ''
    decimal.addEventListener('click',addDecimal);
})



