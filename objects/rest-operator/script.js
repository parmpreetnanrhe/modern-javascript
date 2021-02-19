"use strict;";

// Creating an object
const john = {
  name: "John",
  age: 28,
  height: 5.6,
};

// destructuring object data
const details = ({ name, age: personAge, height }) => {
  console.log(`Name: ${name} Age: ${personAge} Height: ${height}`);
};

const print = ({ name, age, height } = { ...obj }) => {
  console.log(`Name: ${name} Age: ${age} Height: ${height}`);
};
details(john);
print(john);
