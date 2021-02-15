"use strict;";
let fruits = ["Apple", "Orange", "Grapes", "Papaya"];

// Iterating over array

for (let fruit of fruits) {
  console.log(fruit);
}

// Iterating over array and unstructuring array key and value
// fruits.entries() -- returns array of key,value pair array
for (let [key, fruit] of fruits.entries()) {
  console.log(`Element at index ${key} is ${fruit}`);
}
