"use strict;";

/**
 * Getter and setters work as object attributes
 *
 * setter accepts exactly one parameters
 * getter does not accept any argument
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
}

let john = new Person("John Smith", 1996);
console.log(john);
console.log(john.fullName); // Calling getter function
