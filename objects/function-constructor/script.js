"use strict;";
/**
 *  Functional constructor can be declared as normal function or function expression.
 *  We can not use Arrow function for declaring function constructor as it doesn't have access to this keyword.
 */
const Person = function (firstName, birthYear) {
  // Initialising properties
  this.firstName = firstName;
  this.birthYear = birthYear;
  // This function returns the object implicitly.
};

// Attaching Behaviour to objects that are created using Person Constructor

Person.prototype.details = function () {
  return `${this.firstName} is of age ${
    new Date().getFullYear() - this.birthYear
  }.`;
};
// Static method
Person.greet = function () {
  console.log("Hey!");
};
const john = new Person("John", 1989);
const merry = new Person("Merry", 1990);
console.log(john);
console.log(merry);
console.log(john.__proto__);
console.log(merry.__proto__);
console.log(john.__proto__ === Person.prototype);
console.log(merry.__proto__ === Person.prototype);
console.log(john.details());
console.log(merry.details());

Person.greet();
