"use strict;";

const creditCardNumber = "1234-5678-9012";
const maskCard = (cardNumber) => {
  // Retrieve the string starting from 4th last character
  const lastNumbers = cardNumber.slice(-4);
  // padStart() accepts 2 arguments
  // 1st argument states the total length of the generated string
  // second argument specifies string to add in the beginning
  // padEnd() just adds the masked string at the end
  const maskedNumber = lastNumbers.padStart(cardNumber.length, "*");
  return maskedNumber;
};

console.log(maskCard(creditCardNumber));

const name = "john smith";

const formatTitleCase = (str) => {
  // convert the string to lower case and divide it into array using ' ' separator
  const words = str.toLowerCase().split(" ");
  // Iterate over the array of words
  words.forEach((word, i) => {
    // assign the converted value to ith element in the array
    // replace the first charater with its upper case and join it with the rest of the word string
    words[i] = word[0].replace(word[0], word[0].toUpperCase()) + word.slice(1);
  });
  // Join each elements in the words array separated with ' '
  return words.join(" ");
};

console.log(formatTitleCase(name));
