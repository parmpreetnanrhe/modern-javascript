/* The Below directive bound to follow JS norms */
"use strict";

/***********************************************
 * Dot and Bracket Operator
 */
let john = {
  firstName: "John",
  lastName: "Brown",
  standard: "VI",
  section: "A",
};
// Dot operator
console.log("First name:", john.firstName);
// Bracket operator
console.log("Last name:", john["lastName"]);

const nameKey = "Name";
// Dot operator -- Invalid
// console.log("First name:", john."first"+nameKey);
// Bracket operator
console.log("Last name:", john["last" + nameKey]);
