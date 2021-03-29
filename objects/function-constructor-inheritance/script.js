"use strict;";

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

// Defining Instance Functions
Person.prototype.calculateAge = function () {
  return new Date().getFullYear() - this.birthYear;
};

const Student = function (firstName, birthYear, rollNumber) {
  // Binding this keyword with Person method
  Person.call(this, firstName, birthYear);
  this.rollNumber = rollNumber;
};
// Inheriting all methods from Person
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
// After inheriting parent class, adding methods to child class
Student.prototype.details = function () {
  return `${
    this.firstName
  } is ${this.calculateAge()} years old, and has roll number ${
    this.rollNumber
  }.`;
};
const john = new Student("John Smith", 1996, 101);
console.log(john);
console.log(john instanceof Student);
console.log(john instanceof Person);
console.log(john.constructor);
console.log(john.details());
