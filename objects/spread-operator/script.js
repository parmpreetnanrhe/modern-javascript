"use strict;";

// Creating an object
const john = {
  name: "John",
  age: 28,
  height: 5.6,
};

// copy all object properties in another object

const johnCopy = {
  ...john,
  newProperty: 10,
};

console.log(johnCopy);
