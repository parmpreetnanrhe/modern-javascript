"use strict;";

/**
 * Declaring object literals
 */
const availableColors = ["red", "blue", "orange", "green"];
const colors = {
  // Property name can be evaluated
  [`color-${0 + 1}`]: {
    color: availableColors[0],
    count: 1,
  },
  [`color-${2}`]: {
    color: availableColors[1],
    count: 2,
  },
  [`color-${3}`]: {
    color: availableColors[2],
    count: 3,
  },
  [`color-${4}`]: {
    color: availableColors[3],
    count: 4,
  },
};
// Prints colors object
console.log(colors);

// Creating Array of objects
const sizes = [{ size: "Small" }, { size: "Medium" }, { size: "Large" }];
// Prints colors object
console.log(sizes);

// Creating Object

const product = {
  code: "Bag123",
  // add peoperty with different name
  productSize: sizes,
  // add property with same name
  colors,
  // add print method
  print() {
    console.log(
      `Product code ${
        this.code
      } is available in sizes: ${this.getSizes()} and colors: ${this.getColors()}`
    );
  },
  // add method with old way
  getSizes: function () {
    let sizes = [];
    for (let [key, el] of this.productSize.entries()) {
      sizes.push(el.size);
    }
    return sizes.join(", ");
  },
  getColors() {
    let colors = [];
    // Object.entries() method returns an array with all its enumerable properties
    for (const [key, elem] of Object.entries(this.colors)) {
      colors.push(elem.color);
    }
    return colors.join(", ");
  },
};

console.log(product);
product.print();
