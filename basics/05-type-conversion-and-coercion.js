"use strict";
/**********************
 *  Type Conversion and Coercion
 * 
 *  Type Conversion -- Explicit type conversion
 *  Coercion -- Implicit type Conversion

 Three types of conversion

The first rule to know is there are only three types of conversion in JavaScript:

    to string
    to boolean
    to number

Secondly, conversion logic for primitives and objects works differently, 
but both primitives and objects can only be converted in those three ways.

Numeric conversion

For an explicit conversion just apply the Number() function, same as you did with Boolean() and String() .

Implicit conversion is tricky, because it’s triggered in more cases:

    comparison operators (>, <, <=,>=)
    bitwise operators ( | & ^ ~)
    arithmetic operators (- + * / % ). Note, that binary+ does not trigger numeric conversion, when any operand is a string.
    unary + operator
    loose equality operator == (incl. !=).
    Note that == does not trigger numeric conversion when both operands are strings.

    When converting a string to a number, the engine first trims leading and trailing whitespace, \n, \t characters, returning NaN if the trimmed string does not represent a valid number. If string is empty, it returns 0.

null and undefined are handled differently: null becomes 0, whereas undefined becomes NaN.

There are two special rules to remember:

    When applying == to null or undefined, numeric conversion does not happen. null equals only to null or undefined, and does not equal to anything else.

    2. NaN does not equal to anything even itself:


 */

let a = 10; // number
let b = 2.5; // number
let c = "hello"; // string
let d = ""; // string
let e = true; // boolean
let f = false; // boolean
let g = ["Apple", "Banana"]; // object
let h = []; // object
let i = null; // object
let j = NaN; // number
let k = undefined; // undefined

console.log("-----------------------------------------");
console.log("Type of");
console.log("-----------------------------------------");
console.log("Type of", a, "is", typeof a);
console.log("Type of", b, "is", typeof b);
console.log("Type of", c, "is", typeof c);
console.log("Type of", d, "is", typeof d);
console.log("Type of", e, "is", typeof e);
console.log("Type of", f, "is", typeof f);
console.log("Type of", g, "is", typeof g);
console.log("Type of", h, "is", typeof h);
console.log("Type of", i, "is", typeof i);
console.log("Type of", j, "is", typeof j);
console.log("Type of", k, "is", typeof k);

/*****************************************
 * Explict Type Conversion Example
 */

let aString = String(a); // number
let bString = String(b); // number
let cString = String(c); // string
let dString = String(d); // string
let eString = String(e); // boolean
let fString = String(f); // boolean
let gString = String(g); // object
let hString = String(h); // object
let iString = String(i); // object
let jString = String(j); // number
let kString = String(k); // undefined

console.log("-----------------------------------------");
console.log("String Conversion Result");
console.log("-----------------------------------------");
console.log("Result:", aString, "Value:", a);
console.log("Result:", bString, "Value:", b);
console.log("Result:", cString, "Value:", c);
console.log("Result:", dString, "Value:", d);
console.log("Result:", eString, "Value:", e);
console.log("Result:", fString, "Value:", f);
console.log("Result:", gString, "Value:", g);
console.log("Result:", hString, "Value:", h);
console.log("Result:", iString, "Value:", i);
console.log("Result:", jString, "Value:", j);
console.log("Result:", kString, "Value:", k);

let aBoolean = Boolean(a); // number
let bBoolean = Boolean(b); // number
let cBoolean = Boolean(c); // string
let dBoolean = Boolean(d); // string
let eBoolean = Boolean(e); // boolean
let fBoolean = Boolean(f); // boolean
let gBoolean = Boolean(g); // object
let hBoolean = Boolean(h); // object
let iBoolean = Boolean(i); // object
let jBoolean = Boolean(j); // number
let kBoolean = Boolean(k); // undefined

console.log("-----------------------------------------");
console.log("Boolean Conversion Result");
console.log("-----------------------------------------");
console.log("Result:", aBoolean, "Value:", a);
console.log("Result:", bBoolean, "Value:", b);
console.log("Result:", cBoolean, "Value:", c);
console.log("Result:", dBoolean, "Value:", d);
console.log("Result:", eBoolean, "Value:", e);
console.log("Result:", fBoolean, "Value:", f);
console.log("Result:", gBoolean, "Value:", g);
console.log("Result:", hBoolean, "Value:", h);
console.log("Result:", iBoolean, "Value:", i);
console.log("Result:", jBoolean, "Value:", j);
console.log("Result:", kBoolean, "Value:", k);

let aNumber = Number(a); // number
let bNumber = Number(b); // number
let cNumber = Number(c); // string
let dNumber = Number(d); // string
let eNumber = Number(e); // boolean
let fNumber = Number(f); // boolean
let gNumber = Number(g); // object
let hNumber = Number(h); // object
let iNumber = Number(i); // object
let jNumber = Number(j); // number
let kNumber = Number(k); // undefined

console.log("-----------------------------------------");
console.log("Number Conversion Result");
console.log("-----------------------------------------");
console.log("Result:", aNumber, "Value:", a);
console.log("Result:", bNumber, "Value:", b);
console.log("Result:", cNumber, "Value:", c);
console.log("Result:", dNumber, "Value:", d);
console.log("Result:", eNumber, "Value:", e);
console.log("Result:", fNumber, "Value:", f);
console.log("Result:", gNumber, "Value:", g);
console.log("Result:", hNumber, "Value:", h);
console.log("Result:", iNumber, "Value:", i);
console.log("Result:", jNumber, "Value:", j);
console.log("Result:", kNumber, "Value:", k);
