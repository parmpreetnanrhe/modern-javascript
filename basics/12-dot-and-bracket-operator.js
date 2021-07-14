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
  isEligibleForRetirement: function (birthYear, retirementAge) {
    return `${this.firstName} with ${birthYear} is ${
      2021 - birthYear >= retirementAge ? "" : "not"
    } eligible for retirement`;
  },
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
console.log(
  "Is Eligible for retirement:",
  john["isEligibleForRetirement"](1989, 50)
);
