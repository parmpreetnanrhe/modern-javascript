"use strict;";
// JavaScript variables can belong to the local or global scope.
// Global variables can be made local (private) with closures.

// makeBooking is enclosing function
const makeBooking = (airline, taxRate) => {
  // the returned function is enclosed function
  return function (name, tickets, price) {
    // The closure allows this function to access the variables of parent function
    // even after the outer execution is over
    console.log(
      `${name} has booked ${tickets} at ${
        price + price * taxRate * 0.01
      } from ${airline}`
    );
  };
};

const bookAirAsia = makeBooking("Air Asia", 10.5);

bookAirAsia("John", 2, 1000);
bookAirAsia("Rihana", 1, 500);
