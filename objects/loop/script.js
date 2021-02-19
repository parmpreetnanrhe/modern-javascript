"use strict;";
/**
 * Declaring object
 */
const person = {
  name: "John",
  age: 18,
  height: 5.6,
};

/**
 * 1. Looping over object properties/keys
 *
 * Object.keys(obj_name) method returns array of object keys
 */

const properties = Object.keys(person);
for (const prop of properties) {
  const value = person[prop];
  console.log(`${prop}: ${value}`);
}

/**
 * 2. Looping over object values
 */

for (const data of Object.values(person)) {
  console.log(`${data}`);
}

/**
 * 3. Looping over object keys and values
 */

for (const [key, value] of Object.entries(person)) {
  console.log(`${key}: ${value}`);
}
