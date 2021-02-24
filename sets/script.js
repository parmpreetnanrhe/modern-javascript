"use strict;";
// set values check strict type checking and are case sensitive
// follows strict type checking
let fruits = new Set(["apple", "orange", "pear", "apple"]);
// Adding values in set
fruits.add("papaya");
fruits.add("apple").add("grape").add("orange");
console.log(fruits);
console.log(fruits.size);
// deleting value in set
fruits.delete("papaya");
console.log(fruits);
console.log("Has apple:", fruits.has("apple"));
console.log("Has papaya:", fruits.has("papaya"));
// set to array

let arr = [...fruits];
console.log(arr);
// returns array values
console.log(...fruits);
// Loop over set

for (let fruit of fruits) {
  console.log(fruit);
}

/**
 * Set from string
 */

console.log(new Set("Hello world!"));

/**
 * Set From Object
 */

const persons = {
  name: "John",
  age: 28,
  height: 5.6,
};

let personSet = new Set(Object.entries(persons));

for (const [key, value] of personSet) {
  console.log(key, value);
}
