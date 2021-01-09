/* The Below directive bound to follow JS norms */
"use strict";

/***********************************************
 * Functions and Functional Expressions
 */
// Function call
// FUnctions can be called before declaration
const a = 10,
  b = 20;
const greater = max(10, 20);
console.log(`Greater of ${a} and ${b} is ${greater}`);
// Function Declaration
function max(a, b) {
  return a > b ? a : b;
}

// Functional Expression
const min = function (a, b) {
  return a < b ? a : b;
};
// Function call
// We can not call functional expression function before declaring it as it is loaded after window loading.
const smaller = min(a, b);
console.log(`Smaller of ${a} and ${b} is ${smaller}`);
