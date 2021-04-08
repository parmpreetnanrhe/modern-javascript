"use strict";

const rollADice = new Promise((resolve, reject) => {
  const max = 6,
    min = 1;
  const number = Math.ceil(Math.random() * (max - min) + min);
  console.log(number);
  if (number == 6) {
    resolve("You won!");
  } else {
    reject(new Error("You lost. Better luck next time!"));
  }
});

rollADice
  .then((message) => console.log(message)) // handles resolved request
  .catch((err) => console.log(err.message)); // handles rejected request ;

// Promisifing setTimeout

const wait = (seconds) => {
  return new Promise((resolve, reject) => {
    return setTimeout(resolve, seconds * 1000); // Just wait for specified seconds
  });
};

wait(2).then((res) => console.log("I waited for 2 seconds."));
