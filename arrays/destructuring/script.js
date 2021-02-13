"use strict;";

const fruits = ["Apple", "Oranges", "grapes"];
/**
 * Destructuring array by extracting first two values in variables,namely: primary and secondary
 */
let [primary, secondary] = fruits;
console.log(`Fruits: ${fruits}`);
console.log(`Primary: ${primary}\nSecondary: ${secondary}`);

/**
 * Destructuring array by extracting first and third value in variables,namely: primary and secondary
 */
[primary, , secondary] = fruits;
console.log(`Fruits: ${fruits}`);
console.log(`Primary: ${primary}\nSecondary: ${secondary}`);

/**
 * Assigning default values to the destructured variables
 */

let [
  first,
  ,
  ,
  fourth = "Assigns this value instead of defining undefined",
] = fruits;
console.log("First " + first);
console.log("Fourth " + fourth);

let [x, y] = [10, 20];
// swapping values
[x, y] = [y, x];
console.log(x, y);
