"use strict;";
/**
 * forEach loop accepts one call back function
 * It runs for each value of the array
 *  break and continue statement does not work in forEach loop
 */

const names = ["john", "peter", "mark"];
// forEach function passes element, index and array to the callback function in order
names.forEach((element, index, array) => {
  console.log(`Element: ${element} Index: ${index} array:${array}`);
});

names.forEach((element) => {
  console.log(`Element: ${element} Uppercase:${element.toUpperCase()}`);
});

// Defining a function that accepts an argument
const greet = (name) => {
  console.log(`Hello ${name}`);
};

// Since foreach loop passes element value , index and array as argument to the callback function
// greet function would receive the array values one by one
names.forEach(greet);
