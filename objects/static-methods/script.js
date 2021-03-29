"use strict;";

/**
 * static keyword is used to define method on class
 */

class Person {
  constructor(fullName, birthYear) {
    this.fullName = fullName; // It calls setter function every time an object is created
    this.birthYear = birthYear;
  }

  // Mutator / setter function
  set fullName(value) {
    if (value.includes(" ")) {
      this._fullName = value;
    } else {
      alert("Invalid full name.");
    }
  }

  // Accessors / Getter
  get fullName() {
    return this._fullName;
  }

  // instance functions

  calculateAge() {
    return new Date().getFullYear() - this.birthYear;
  }

  details() {
    return `${this.fullName} is ${this.calculateAge()} years old.`;
  }
  static greet() {
    console.log("Hey!");
  }
}

let john = new Person("John Smith", 1996);
console.log(john);
console.log(john.fullName); // Calling getter function of person class
console.log(john.details()); // Calls details() function of person class
Person.greet(); // calling static method
