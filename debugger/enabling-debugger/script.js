"use strict";
/***********
 * debugger: opens debugger console
 */

let min = 0,
  max = 0;
let arr = [20, 1, 6, -1];
let count = arr.length;
for (let i = 0; i < count; i++) {
  debugger;
  if (arr[i] > max) {
    max = arr[i];
  }
  if (arr[i] < min) {
    min = arr[i];
  }
}
console.log(`min = ${min} and max = ${max}`);
