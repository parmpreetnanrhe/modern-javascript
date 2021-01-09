/* The Below directive bound to follow JS norms */
"use strict";

/***********************************************
 * Object Method
 */
let john = {
  firstName: "John",
  lastName: "Brown",
  standard: "VI",
  section: "A",
  summary: function () {
    return `${this.firstName} ${this.lastName} studies in ${this.standard} ${this.section}.`;
  },
  birthYear: function (year) {
    this.age = 2021 - year;
    this.doy = year;
    return this.doy;
  },
};
console.log(john.summary());
console.log("Birth Year:", john["birthYear"](2000));
console.log("Birth Year:", john.birthYear(2000));
console.log("Age:", john.age);
