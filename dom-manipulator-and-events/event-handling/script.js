"use strict;";

const btn = document.querySelector("#greet");
const greet = function () {
  document.querySelector("#msg").textContent = "Hello!";
};
// Register click event with btn
// Calling function named greet on btn click
btn.addEventListener("click", greet);
