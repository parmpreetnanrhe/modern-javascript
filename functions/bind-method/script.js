"use strict;";

const airIndia = {
  airline: "Air India",
  iataCode: "ITA123",
  bookings: [],

  book(flightNumber, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNumber}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNumber}`, name });
  },
};

const kingfisher = {
  airline: "King Fisher",
  iataCode: "ITA123",
  bookings: [],
};
// Method 2
const book = airIndia.book;
// bind method accepts  argument that would be treated as this keyword in the function
// It returns new function that can be called later
// It does not calls the method spontaneously
const bookAir = book.bind(airIndia);
bookAir(786, "Rihanna");
bookAir(...[24, "Shakira"]);
const bookKing = book.bind(kingfisher);
bookKing(123, "John");
bookKing(78, "Peter");

// Partial Handling
// Bind method that bounds a parameter value
// The following function would book a seat for Flight23
const bookAir23 = book.bind(airIndia, "Flight23");
bookAir23("Justin");

// Event Handling

// Assigning a value to airIndia object
airIndia.planes = 10;

// defining a method  to increment number of planes
airIndia.buy = function () {
  console.log(this);
  this.planes++;
  console.log(this);
};

// By default this keyword referes to the DOM element that is bind with the event
// For example, in the following code, this keyword in  airIndia.buy method would point to buy button
// document.querySelector("#buy").addEventListener("click", airIndia.buy);
// To manually define the this keyword reference, bind method can be used.
document
  .querySelector("#buy")
  .addEventListener("click", airIndia.buy.bind(airIndia));
