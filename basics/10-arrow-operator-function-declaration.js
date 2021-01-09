/* The Below directive bound to follow JS norms */
"use strict";

/***********************************************
 * Declaring functions with arrow operator
 */

const a = 10,
  b = 20;
const max = (a, b) => {
  return a > b ? a : b;
};
console.log(`Max of ${a} and ${b} is ${max(a, b)}`);

// Declaring a function that contains a single line statement and returns a value

const min = (a, b) => (a > b ? a : b);

console.log(`Min of ${a} and ${b} is ${min(a, b)}`);

// Passing single argument to function
const table = (num) => {
  let output = ``;
  for (let i = 0; i < 11; i++) {
    output += `${num} * ${i} = ${num * i}
`;
  }
  return output;
};
console.log(table(5));
