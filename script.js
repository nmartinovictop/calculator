
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
    if (operator == 'add') {
        return add(num1,num2)
    } else if (operator == 'subtract') {
        return subtract(num1,num2)
    } else if (operator == 'multiply') {
        return multiply(num1,num2)
    } else {
        return divide(num1,num2)
    }
}

let divs = document.querySelectorAll('.keypad')

divs.forEach( div => {
    div.addEventListener('click', () => 
    console.log(div.textContent))
})
