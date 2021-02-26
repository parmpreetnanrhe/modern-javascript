"use strict;";
// Method 1
// const book = function (flightNumber, name) {
//   console.log(
//     `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNumber}`
//   );
//   this.bookings.push({ flight: `${this.iataCode}${flightNumber}`, name });
// };
//
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
// Call method accepts first argument that would be treated as this keyword in the function
// followed by function arguments
book.call(airIndia, 786, "Rihanna");
book.call(airIndia, ...[24, "Shakira"]);

book.call(kingfisher, 123, "John");
book.call(kingfisher, 78, "Peter");

// Apply method is similar to call method
// It just accepts function parameters as array
book.apply(airIndia, [21, "Alan"]);
