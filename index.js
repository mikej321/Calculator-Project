const result = document.querySelector('.result');
const calcButtons = document.querySelectorAll('.calc-button');
result.textContent = '';


/* Store the first number that is input into the calculator
   when a user presses an operator, and also save which
   operation has been chosen and then operate() on them when
   the user presses the '=' key. */

/* Once operate() has been called, update the display
   with the 'solution' to the operation. */

/* This is the hardest part of the project. I need
to figure out how to store all of the values and call
the operate function with them. */


let add = (firstNumber, ...numbers) => {
  let result = firstNumber;
  for (const number of numbers) {
    result += number;
  }
  return result;
}

let subtract = (firstNumber, ...numbers) => {
  let result = firstNumber;
  for (const number of numbers) {
     result -= number;
  }
  return result;
}

let multiply = (firstNumber, ...numbers) => {
  let result = firstNumber;
  for (const number of numbers) {
    result *= number;
  }
  return result;
}

let divide = (firstNumber, ...numbers) => {
  let result = firstNumber;

  for (const number of numbers) {
    result /= number;
  }
  return result;
}

let operate = (operator, num1, num2) => {

  // takes an operator and 2 numbers

  // calls one of the above functions on the numbers

    switch (operator) {

      case 'add':
        return add(num1, num2);

      case 'subtract':
        return subtract(num1, num2);

      case 'multiply':
        return multiply(num1, num2);

      case 'divide':
        return divide(num1, num2);
        
      default:
        return 'please enter an operator first';
      
    }
}

let operator;
let operand;

calcButtons.forEach((button) => {

  button.addEventListener('click', function() {
    
    let numbers = '12345';
    
    switch (button.value) {


      case 'clear':
        let backedValue = '';
        result.textContent = backedValue;
        break;

      case 'add':
        operand = Number(result.textContent);
        operator = button.value;
        result.textContent = '';
        break;

      case 'subtract':
        operand = Number(result.textContent);
        operator = button.value;
        result.textContent = '';
        break;

      case 'multiply':
        operand = Number(result.textContent);
        operator = button.value;
        result.textContent = '';
        break;

      case 'divide':
        operand = Number(result.textContent);
        operator = button.value;
        result.textContent = '';
        break;

      case 'minus':
        result.textContent = -Math.abs(result.textContent);
        operand = result.textContent;
        break;

      case 'back':
        break;

      case 'percentage':
        break;

      case 'equals':
        result.textContent = operate(operator, operand, Number(result.textContent));
        break;
        
        

      default:
        result.textContent += button.textContent;
        break;
    }
    

   
    
    
  })
})








/* I need to store the first number that is input
into the calculator when a user presses an operator,
and also save the operation that has been chosen. */

// operate() on them whenever the user presses '='

// once operate() has been called, update the display with the solution




