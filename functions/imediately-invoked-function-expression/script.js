"use strict;";
// Immediately invoked function expressions are designed for calling once

(function () {
  console.log("This anonymous function would be called only once.");
})();

// Anonymous function as an event callback function

setTimeout(function () {
  console.log("Called from setInterval function call.");
}, 1000);
