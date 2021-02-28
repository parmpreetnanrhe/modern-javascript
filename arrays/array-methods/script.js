"use strict;";
/**
 * Declaring Array
 */

let alphabets = new Array();
// Add Elements in array
alphabets.push("a");
alphabets.push("b");
alphabets.push("c");
alphabets.push("d");
alphabets.push("e");
alphabets.push("a");
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Alphabets", alphabets);
console.log("Numbers", numbers);

/**
 * Retrieve number of elements in an array
 */

console.log("Alphabets count:", alphabets.length);
console.log("Numbers count:", numbers.length);

/**
 * Remove last element from an array
 */
let poppedElement = numbers.pop();
console.log("Removed element from numbers array (last element)", poppedElement);

/**
 * Remove first element from an array
 */
poppedElement = numbers.shift();
console.log(
  "Removed element from numbers array (first element)",
  poppedElement
);

/**
 *  Add element in the beginning of the array
 */
numbers.unshift(100);
console.log("Updated numbers array:", numbers);

/**
 *  Reverse elements of the array
 */
numbers.reverse();
console.log("Updated reversed numbers array:", numbers);

/**
 *  Retrieve first occurance of an element in an array
 */
let index = alphabets.indexOf("a");
console.log(`indexOf 'a' in alphabets array: ${index} `);
index = alphabets.indexOf("x");
console.log(`indexOf 'x' in alphabets array: ${index} `);

/**
 *  Retrieve last occurance of an element in an array
 */
index = alphabets.lastIndexOf("a");
console.log(`lastIndexOf 'a' in alphabets array: ${index} `);
index = alphabets.lastIndexOf("x");
console.log(`lastIndexOf 'x' in alphabets array: ${index} `);

/**
 *  Test availability of an element in an array
 */

let exists = alphabets.indexOf("a") != -1;
console.log(`alphabets ${exists ? "contain" : "do not contain"} 'a'`);
exists = alphabets.indexOf("x") != -1;
console.log(`alphabets ${exists ? "contain" : "do not contain"} 'x'`);

// Join elements of an array
console.log(`'-' separated numbers array: ${numbers.join("-")}`);

// Retreive some array elements without modifying original array

let extractedArray = numbers.slice(2);
console.log("Retrieves element from index 2 till end", extractedArray);
extractedArray = numbers.slice(2, -3);
console.log(
  "Retrieves element from index 2 till 3rd last element(3rd last element is not included)",
  extractedArray
);

// Retreive some array elements with modifying original array

extractedArray = numbers.splice(2);
console.log("Retrieves element from index 2 till end", extractedArray);

console.log("Original Array", numbers);
