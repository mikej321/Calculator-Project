const result = document.querySelector('.result');
const calcButtons = document.querySelectorAll('.calc-button');
const numberButton = document.querySelectorAll('.numberButton');
const operator = document.querySelectorAll('.operator');
const equals = document.querySelector('.button-equals');
const clearButton = document.querySelector('.button-clear');
const decimal = document.querySelector('.button-dot');
const minus = document.querySelector('.button-negative');
const backButton = document.querySelector('.button-back');

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


let add = (...numbers) => {
  
  return numbers.reduce((accumulator, current) => accumulator + current, 0);
}

let subtract = (...numbers) => {
  
  return numbers.reduce((accumulator, current) => accumulator - current);
}

let multiply = (...numbers) => {
  
  return numbers.reduce((accumulator, current) => accumulator * current, 1);
}

let divide = (...numbers) => {
  
  return numbers.reduce((accumulator, current) => accumulator / current);
}

// create an array to hold the digits that the functions will perform on

let num = [];

// Create an array to hold the combined num arrays to make the final operand numbers

let operand = [];
let myOperator;

numberButton.forEach((button) => {
   button.addEventListener('click', function() {

      // populates the display by appending digits after each other
      let selection = this.textContent;
      result.append(selection);

      // pushes those digits into the num array
      num.push(parseFloat(selection));
   })
})

/* When an operator is pressed, it takes the value of the operator and stores
   it into the selection variable. Next, it combines all digits that are in
   the num array and pushes it to the operand array as a number. Afterwards,
   it resets the num array and appends the operator to the display */

operator.forEach((button) => {
   button.addEventListener('click', function() {
      let selection = this.value; 
      myOperator = selection;  
      operand.push(parseFloat(num.join('')));
      num = [];
      result.append(this.textContent);
   })
})

let lastNum;

decimal.addEventListener('click', function() {
   num[num.length - 1] = num[num.length - 1] + '.';
   result.append(this.textContent);
})

minus.addEventListener('click', function() {
   num[0] = num[0] * -1;
   result.textContent = '';
   for (let digit in num) {
      result.append(num[digit]);
   }
})

backButton.addEventListener('click', function() {
   num.pop();
   result.textContent = '';
   for (let digit in num) {
      result.append(num[digit]);
   }
})



/* equals will create a new variable named ans that will hold the answer to the problem.
It will take the myOperator variable from clicking the operator and perform one of 4
operations depending on which operator was pressed. Next, it will clear the display
and append the answer to the display. Finally, it will clear all arrays and the operator */


equals.addEventListener('click', function() {
   let ans;
   let stringNum;
   let fixedNum; 
   operand.push(parseFloat(num.join('')));
   num = [];
   switch(myOperator) {
      case 'add':
         ans = add(operand[0], operand[1]);
         result.textContent = '';     
         break;
      case 'subtract':
         ans = subtract(operand[0], operand[1]);
         result.textContent = '';
         break;
      case 'multiply':
         ans = multiply(operand[0], operand[1]);
         result.textContent = '';
         break;
      case 'divide':
         ans = divide(operand[0], operand[1]);
         result.textContent = '';
         break;
   }

   stringNum = ans.toString().length;
   
   if (stringNum > 6) {
      fixedNum = parseFloat(ans.toFixed(5));
      result.append(fixedNum);
   } else {
      fixedNum = ans;
      result.append(fixedNum);
   }

   operand = [];
   myOperator = '';

   num.push(fixedNum);
})

clearButton.addEventListener('click', function() {
   num = [];
   operand = [];
   myOperator = '';
   result.textContent = '';
})







/* Create the functions that populate the display
   when you click the number buttons. You should be
   storing the 'display value' in a variable somewhere
   for use in the next step. */

/* Make the calculator work! You'll need to store the
   first number that is input into the calculator when
   a user presses an operator, and also save which operation
   has been chosen and then operate() on them when the user
   presses the '=' key. */

/* You should already have the code that can populate the display,
   so once operate() has been called, update the display with the
   'solution' to the operation */

/* This is the hardest part of the project. You need to figure out
   how to store all the values and call the operate function with them.
   Don't feel bad if it takes you awhile to figure out the logic. */








