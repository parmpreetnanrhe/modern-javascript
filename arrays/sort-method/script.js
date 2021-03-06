"use strict;";
// sort function accepts  a callback function as an argument
// and returns a new array that matches the specified sort criteria.

// sort callback function should return 1 to change the order and -1 to keep the order
const arr = [-1, 10, 2, -8, 0, 20, 100, 80];
console.log(`Elements ${arr}`);
const sortedArray = arr.sort((a, b) => a - b);
console.log(`Sorted array in ascending order: ${sortedArray}`);
const sortedArray2 = arr.sort((a, b) => b - a);
console.log(`Sorted array in descending order: ${sortedArray2}`);

const currency = "EUR";
let users = [
  {
    name: "john smith",
    pin: 1234,
    account_number: "ABC1234",
    transactions: [
      {
        date: "01/01/2021",
        amount: 1000,
        comment: "Some random amount transfer.",
      },
      {
        date: "02/01/2021",
        amount: -500,
        comment: "Some random amount transfer.",
      },
      {
        date: "01/02/2021",
        amount: 1500,
        comment: "Some random amount transfer.",
      },
      {
        date: "01/03/2021",
        amount: -50,
        comment: "Some random amount transfer.",
      },
    ],
  },
  {
    name: "Peter Parker",
    pin: 1234,
    account_number: "ABC1235",
    transactions: [
      {
        date: "01/01/2021",
        amount: 2000,
        comment: "Some random amount transfer.",
      },
      {
        date: "02/01/2021",
        amount: 1500,
        comment: "Some random amount transfer.",
      },
      {
        date: "01/02/2021",
        amount: 800,
        comment: "Some random amount transfer.",
      },
      {
        date: "01/03/2021",
        amount: 150,
        comment: "Some random amount transfer.",
      },
    ],
  },
  {
    name: "merry JANE",
    pin: 1234,
    account_number: "ABC1236",
    transactions: [
      {
        date: "01/01/2021",
        amount: 1000,
        comment: "Some random amount transfer.",
      },
      {
        date: "02/01/2021",
        amount: -250,
        comment: "Some random amount transfer.",
      },
      {
        date: "01/02/2021",
        amount: 900,
        comment: "Some random amount transfer.",
      },
      {
        date: "01/03/2021",
        amount: 350,
        comment: "Some random amount transfer.",
      },
    ],
  },
  {
    name: "john cena",
    pin: 1234,
    account_number: "ABC1237",
    transactions: [
      {
        date: "01/01/2021",
        amount: 1000,
        comment: "Some random amount transfer.",
      },
      {
        date: "02/01/2021",
        amount: -500,
        comment: "Some random amount transfer.",
      },
      {
        date: "01/02/2021",
        amount: 800,
        comment: "Some random amount transfer.",
      },
      {
        date: "01/03/2021",
        amount: -50,
        comment: "Some random amount transfer.",
      },
    ],
  },
];

const createUsername = (user) => {
  let words = user.name.toLowerCase().split(" ");
  // Map creates a new array with the initials which can be used further to create username
  let initials = words
    .map(function (word) {
      return word[0];
    })
    .join("");
  user.username = initials;
};

const formatAmount = (amount) => `${currency} ${amount}`;

const formatUser = (user) => {
  user.name = user.name.toUpperCase();
  createUsername(user);
  user.transactions.forEach((transaction) => {
    transaction.desctiption = `${user.name} has ${
      transaction.amount > 0 ? "deposited" : "withdrew"
    } ${formatAmount(Math.abs(transaction.amount))} on ${transaction.date}`;
  });
};
// Use forEach where no new array is required
users.forEach(formatUser);
// slice creates a copy of array of object to avoid changes in original object
const currentUser = users[0];
console.log(currentUser.transactions);
const transactionInAscendingOrder = currentUser.transactions
  .slice()
  .sort((a, b) => (a.amount > b.amount ? 1 : a.amount < b.amount ? -1 : 0));
console.log(transactionInAscendingOrder);
const transactionInDescendingOrder = currentUser.transactions
  .slice()
  .sort((a, b) => (a.amount > b.amount ? -1 : a.amount < b.amount ? 1 : 0));
console.log(transactionInDescendingOrder);
