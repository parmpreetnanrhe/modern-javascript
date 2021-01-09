/* The Below directive bound to follow JS norms */
"use strict";

/***********************************************
 * Declaring Arrays
 */

// Array Declaration Method 1
let fruits = [];
// add elements to array
fruits.push("Apple");
fruits.push("Orange");
fruits.push("Pineapple");
// add elements in the beginning
fruits.unshift("Peach");
console.log("Array:", fruits);
// remove element from end
const lastFruit = fruits.pop();
console.log("Removed Element:", lastFruit);
console.log("Array:", fruits);
const firstFruit = fruits.shift();
console.log("Removed Element:", firstFruit);
console.log("Array:", fruits);

console.log("Has Litchi:", fruits.includes("Litchi"));
console.log("Has Apple:", fruits.includes("Apple"));
console.log("Index of Litchi:", fruits.indexOf("Litchi"));
console.log("Index of Apple:", fruits.indexOf("Apple"));
