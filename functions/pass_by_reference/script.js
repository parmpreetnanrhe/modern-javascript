"use strict;";
// Javascript has 3 data types that are passed by reference: Array , Function , and Object .

/**
 * 1. Passing Array to a function
 */

const sortArray = (arr) => {
  let length = arr.length;
  for (let i = 0; i < length - 1; i++) {
    for (let j = i + 1; j < length; j++) {
      if (arr[i] < arr[j]) {
        // swap values
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
};

let arr = [5, 2, 10, 1, 20, -1, 6];
console.log("Before Swapping: ", ...arr);
sortArray(arr);
console.log("After Swapping: ", ...arr);

let person = {
  name: "raman",
  age: 18,
  height: 5.7,
};

/**
 * 2. Passing object to a function
 */
const formatPerson = (person) => {
  person.name = person.name.toUpperCase();
};
console.log("Before Formatting: ", person);
formatPerson(person);
console.log("After Formatting: ", person);
