/* The Below directive bound to follow JS norms */
"use strict";

/***********************************************
 * Using switch statements
 */
const a = 10,
  b = 20;
let result;
const operator = "+";
switch (operator) {
  case "+":
    result = a + b;
    break;
  case "-":
    result = a - b;
    break;
  case "*":
    result = a * b;
  default:
    result = a / b;
}

console.log(`${a} ${operator} ${b} is ${result}`);
