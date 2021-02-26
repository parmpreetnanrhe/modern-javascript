"use strict;";
/**
 * First-Class Functions
 *  - JS treats functions as first-class citizens
 *  - This means that functions are simply values
 *  - Functions are just another "type" of object
 *  - Store functions in variable properties
 *  - Pass functions as arguments to other functions
 *  - Return function from functions
 *  - Call methods on functions
 *
 * Higher-Order Functions
 *  - A function that receives another function as an argument, that returns a new function, or both.
 *  - This is only possible because of first-class functions
 *
 */

// oneWord is first-class function that replaces all spaces
const oneWord = (str) => {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  // Split the string with space and destructure array
  // first word and other words are stored in variables as below
  const [first, ...others] = str.split(" ");
  // capitalize first word,
  // and extract all other words to new array and join array elements with space
  return [first.toUpperCase(), ...others].join(" ");
};

// Higher-order function

const transformer = function (str, fn) {
  console.log(`Origional string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer("Javascript is the best!", upperFirstWord);
transformer("Javascript is the best!", oneWord);

// Callback functions
const sayHello = () => {
  console.log("Hello");
};
// addEventListener Is higher-order function that accepts sayHello function as callback value
document.body.addEventListener("click", sayHello);
// ForEach accepts a callback function
["John", "Peter"].forEach(sayHello);
