"use strict;";
/**
 * Select all elements by class
 */
// querySelectorAll returns array of elements that matches the selction pattern
const paraElements = document.querySelectorAll(".para");
/**
 * Retrieving selected elements count
 */
const paraElementsCount = paraElements.length;
console.log("Number of selected elements: " + paraElementsCount);
/**
 * Iterating over elements in paraElements array
 */
paraElements.forEach((element, key) => {
  console.log(`Element ${key + 1} is ${element.innerHTML}`);
});

/***
 * Selecting the first element that matches the criteria
 * Returns null if no element matches the criteria
 */
const invalidElemnt = document.querySelector("#para");

console.log("invalidElement: " + invalidElemnt);

const firstParagraph = document.querySelector("p");
console.log(firstParagraph.textContent);
