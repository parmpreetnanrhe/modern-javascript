"use strict";
/**********************
 *  Truthy or falsy values
 *
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
