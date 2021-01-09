"use strict";
/**********************
 *  Flow Control Statement - if else statement
 */

let a = 10;
let b = 20;
let message = ``;
if (a > b) {
  message = `${a} is greater than ${b}`;
} else if (a < b) {
  message = `${b} is greater than ${a}`;
} else {
  message = `Both are equal.`;
}
console.log(message);
