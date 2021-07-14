"use strict";
/***********
 * console.log() : It lists its arguments as values
 * console.warn() : It highlights its argiments in yellow color.
 * console.error() : It highlights its argiments in red color.
 * console.table() : It prints its argiments in tabular form.
 */

console.log("This is a simple message");
console.warn("This is a warning message");
console.error("This is an error message");

let data = ["Value 1", "Value 2"];

console.table(data);

let obj = { success: 1, message: "This is a success message" };
console.table(obj);

let z = 10;
console.table(z);
