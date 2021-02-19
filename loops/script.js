"use strict;";
/**
 * The for/in statement loops through the properties of an object.

The block of code inside the loop will be executed once for each property.

JavaScript supports different kinds of loops:

    for - loops through a block of code a number of times
    for/in - loops through the properties of an object
    for/of - loops through the values of an iterable object
    while - loops through a block of code while a specified condition is true
    do/while - loops through a block of code once, and then repeats the loop while a specified condition is true

 * 
 */

/**
 *  1.  for - loops through a block of code a number of times
 */

const table = (num) => {
  for (let i = 1; i < 11; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
  }
};

table(10);

/**
 *  2.  for - loops through a block of code a number of times
 */
