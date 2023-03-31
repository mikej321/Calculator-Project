

function add(...num) {

  return [...num].reduce((total, accumulator) => total + accumulator, 0);
}

add(2, 4, 6, 12);

function subtract(...num) {
  return [...num].reduce((total, accumulator) => total - accumulator)
}

subtract(10, 5, 2);


function multiply(...num) {
  return [...num].reduce((total, accumulator) => total * accumulator, 1);
}

multiply(2, 5, 5);

function divide(...num) {
  return [...num].reduce((total, accumulator) => total / accumulator);
}

divide(50, 5, 2);






