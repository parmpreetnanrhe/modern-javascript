"use strict;";
// Assigning default values to parameters
const makeBooking = function (
  flightName,
  numberOfPassangers = 1,
  price = 200 * numberOfPassangers
) {
  console.log(
    `Booking confirmed for ${flightName} for ${numberOfPassangers} @ $ ${price}`
  );
};

makeBooking("LN101");
makeBooking("LN101", 2);
makeBooking("LN101", 3, 900);
makeBooking("LN101", undefined, 600);
