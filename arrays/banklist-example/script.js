"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const currency = "€";

let users = [
  {
    name: "john smith",
    pin: 1234,
    interest_rate: 1.2,
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
  {
    name: "Peter Parker",
    pin: 1234,
    interest_rate: 1.5,
    account_number: "ABC1235",
    transactions: [
      {
        date: "01/01/2021",
        amount: 2000,
        comment: "Some random amount transfer.",
      },
      {
        date: "02/01/2021",
        amount: -1500,
        comment: "Some random amount transfer.",
      },
      {
        date: "01/02/2021",
        amount: 800,
        comment: "Some random amount transfer.",
      },
      {
        date: "01/03/2021",
        amount: -150,
        comment: "Some random amount transfer.",
      },
    ],
  },
  {
    name: "merry JANE",
    pin: 1234,
    interest_rate: 1.0,
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
    interest_rate: 1.2,
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

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");
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

// implements standard amount format
const formatAmount = (amount) => `${amount}${currency}`;
// returns net balance of a user
const getCurrentBalance = (user) => {
  let initialBalance = 0;
  return user.transactions.reduce((currentBalance, transaction) => {
    currentBalance += transaction.amount;
    return currentBalance;
  }, initialBalance);
};

// retuns sum of deposits
const getDepositAmount = (user) => {
  let initialBalance = 0;
  return user.transactions
    .filter((elem) => elem.amount > 0)
    .reduce((currentBalance, transaction) => {
      currentBalance += transaction.amount;
      return currentBalance;
    }, initialBalance);
};
// retuns sum of withdrawals
const getWithdrawalAmount = (user) => {
  let initialBalance = 0;
  return user.transactions
    .filter((elem) => elem.amount < 0)
    .reduce((currentBalance, transaction) => {
      currentBalance += transaction.amount;
      return currentBalance;
    }, initialBalance);
};

// returns interest applicable

const getInterest = (user) => {
  return getCurrentBalance(user) * (user.interest_rate / 100);
};

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

// Common function to update innerHTML of an element
const updateContent = (elem, content) => {
  elem.innerHTML = content;
};

const getTransactionHTML = (transaction, index) => {
  const type = transaction.amount > 0 ? "deposit" : "withdrawal";
  return `<div class="movements__row">
    <div class="movements__type movements__type--${type}">${index} ${type}</div>
    <div class="movements__date">${transaction.date}</div>
    <div class="movements__value">${formatAmount(
      Math.abs(transaction.amount)
    )}</div>
  </div>`;
};

// update user transaction screen
const updateTransaction = (user) => {
  updateContent(containerMovements, "");
  user.transactions.forEach((transaction, index) => {
    containerMovements.insertAdjacentHTML(
      "afterbegin",
      getTransactionHTML(transaction, index + 1)
    );
  });
};

// updates current balance on screen
const updateCurrentBalance = (user) => {
  updateContent(labelBalance, formatAmount(getCurrentBalance(user)));
};
// updates current balance on screen
const updateDepositeAmount = (user) => {
  updateContent(labelSumIn, formatAmount(getDepositAmount(user)));
};
// updates current balance on screen
const updateWithdrawalAmount = (user) => {
  updateContent(labelSumOut, formatAmount(getWithdrawalAmount(user)));
};
// updates current balance on screen
const updateInterest = (user) => {
  updateContent(labelSumInterest, formatAmount(getInterest(user)));
};

// Updates dashboard with user data
const initializeDashboard = (user) => {
  updateCurrentBalance(user);
  updateTransaction(user);
  updateDepositeAmount(user);
  updateWithdrawalAmount(user);
  updateInterest(user);
};

console.log(...users);

const currentUser = users[0];
initializeDashboard(currentUser);
