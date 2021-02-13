"use strict;";
/**
 * Spread operator is used to extract all values from an array,
 * without creating other variables
 * It always comes at the right side of the assignment statement
 */

const arr = [1, 2, 3, 4];
// get all values from already created arr, and add 2 more elements tothe newArray
const newArr = [...arr, 5, 6];
console.log("Original Array: ", arr);
console.log("New Array: ", newArr);

// creating copy of array

const copyArr = [...arr];
console.log("Copy Array: ", copyArr);

// Function

function sum(a = 0, b = 0, c = 0, d = 0, e = 0) {
  console.log(`Sum=${a + b + c + d + e}`);
}

sum(10, 20, 30);
// Passing all values from array to function
sum(...arr);
