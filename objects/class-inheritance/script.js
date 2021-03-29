"use strict;";

/**
 * extends keyword is used to define child class
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
}

// Defining Child class
class Student extends Person {
  constructor(fullName, birthYear, rollNo) {
    super(fullName, birthYear);
    this.rollNo = rollNo;
  }

  // Overriding super class method
  details() {
    return super.details() + `The assigned roll no is ${this.rollNo}.`;
  }
}

let john = new Student("John Smith", 1996, 101);
console.log(john);
console.log(john.fullName); // Calling getter function of person class
console.log(john.details()); // Calls details() function of student class
