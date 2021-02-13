"use strict;";
/**
 * It comes at the left of the assignment operator
 */
const arr = [1, 2, 3, 4, 5, 6, 7];

let [a, b, ...others] = arr;
console.log("a=" + a);
console.log("b=" + others);
console.log("others=" + others);

// ommit 2nd value
// rest operator should come at the last always
let [x, , ...otherValues] = arr;
console.log("x=" + x);
console.log("otherValues=" + otherValues);

// function

function sum(...numbers) {
  let total = 0;
  let length = numbers.length;
  for (let i = 0; i < length; i++) {
    total += numbers[i];
  }
  console.log("Sum: ", total);
}

sum(10, 20);
sum(...arr);
