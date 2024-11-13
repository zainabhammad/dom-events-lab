/*-------------------------------- Variables --------------------------------*/
let firstNumber = '';
let secondNumber = '';
let operator = null;
let result = 0;

/*------------------------ Cached Element References ------------------------*/
const buttons = document.querySelectorAll('.button');
const displayEl = document.querySelector('.display');

/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        // If it is a number
        if(event.target.classList.contains("number")) {
            if(operator === null) {
                firstNumber += event.target.innerText;
                displayEl.innerText = firstNumber;
            } else {
                secondNumber += event.target.innerText;
                displayEl.innerText = secondNumber;
            }
        }
        // If it is an operator
        else if (event.target.classList.contains("operator")){
            const selectedOperator = event.target.innerText;
            
            if (selectedOperator !== 'C') {
                if (firstNumber !== '') {
                    operator = selectedOperator;
                }
            } else {
                // Clear display and reset variables
                displayEl.innerText = '';
                firstNumber = '';
                secondNumber = '';
                operator = null;
            }
        } 
        // If it's equals
        else if (event.target.classList.contains("equals")) {
            calculate();
        }
    });
});

/*-------------------------------- Functions --------------------------------*/
function calculate() {
    if(firstNumber !== '' && secondNumber !== '' && operator !== null) {
        const num1 = parseFloat(firstNumber);
        const num2 = parseFloat(secondNumber);

        if (operator === '+') {
            result = num1 + num2;
        } else if (operator === '-') {
            result = num1 - num2;
        } else if (operator === '*') {
            result = num1 * num2;
        } else if (operator === '/') {
            result = num2 !== 0 ? num1 / num2 : 'Error'; // Handle division by zero
        }

        displayEl.innerText = result;
        firstNumber = result
        
        firstNumber = result.toString();
        secondNumber = '';
        operator = null;
    }
}
