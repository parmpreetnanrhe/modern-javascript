"use strict;";

const greet = (greeting) => {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const hiGreet = greet("Hi");
hiGreet("John");

greet("Hello")("Peter");
