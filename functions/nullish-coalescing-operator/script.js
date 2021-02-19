"use strict;";
// Assigning default values to parameters
const makeBooking = function (flightName, numberOfPassangers, price) {
  // assign default value only when parameter is not defined.
  //(false value is considered as a valid value when parameter is defined)
  numberOfPassangers = numberOfPassangers ?? 10;
  price = price ?? numberOfPassangers * 200;
  console.log(
    `Booking confirmed for ${flightName} for ${numberOfPassangers} @ $ ${price}`
  );
};

const makeBookingOldWay = function (flightName, numberOfPassangers, price) {
  // assign default value only when parameter is not defined.
  //(false value is not considered as a valid value even when parameter is defined)
  numberOfPassangers = numberOfPassangers || 10;
  price = price ?? numberOfPassangers * 200;
  console.log(
    `Booking confirmed for ${flightName} for ${numberOfPassangers} @ $ ${price}`
  );
};

makeBooking("LN101");
makeBooking("LN101", 2);
makeBooking("LN101", 0);
makeBooking("LN101", 3, 900);
makeBooking("LN101", undefined, 600);

makeBookingOldWay("LN101");
makeBookingOldWay("LN101", 2);
makeBookingOldWay("LN101", 0); // Here numberOfPassangers would be assigned value 10 instead of 0
makeBookingOldWay("LN101", 3, 900);
makeBookingOldWay("LN101", undefined, 600);
