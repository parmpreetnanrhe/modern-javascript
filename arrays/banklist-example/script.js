"use strict";

/**
 * Internationalisation
 * iso language codes
 * http://www.lingoes.net/en/translator/langcode.htm
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
 *
 */
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
        date: "2021-03-11T14:53:49.228Z",
        amount: 1000,
        comment: "Some random amount transfer.",
      },
      {
        date: "2021-03-12T14:53:49.228Z",
        amount: -500,
        comment: "Some random amount transfer.",
      },
      {
        date: "2021-03-12T14:53:49.228Z",
        amount: 800,
        comment: "Some random amount transfer.",
      },
      {
        date: "2021-03-13T14:53:49.228Z",
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
        date: "2021-03-11T14:53:49.228Z",
        amount: 1000,
        comment: "Some random amount transfer.",
      },
      {
        date: "2021-03-11T14:53:49.228Z",
        amount: 250,
        comment: "Some random amount transfer.",
      },
      {
        date: "2021-03-12T14:53:49.228Z",
        amount: 900,
        comment: "Some random amount transfer.",
      },
      {
        date: "2021-03-13T14:53:49.228Z",
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
        date: "2021-03-11T14:53:49.228Z",
        amount: 1000,
        comment: "Some random amount transfer.",
      },
      {
        date: "2021-03-11T14:53:49.228Z",
        amount: -500,
        comment: "Some random amount transfer.",
      },
      {
        date: "2021-03-12T14:53:49.228Z",
        amount: 800,
        comment: "Some random amount transfer.",
      },
      {
        date: "2021-03-13T14:53:49.228Z",
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

/*****************
 * Functions
 */

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
const formatAmount = (amount) => {
  const locale = navigator.language;
  const options = { style: "currency", currency: "EUR" };
  return new Intl.NumberFormat(locale, options).format(amount);
  // return `${amount}${currency}`;
};

// implements standard date format
const formatDate = (dateStr = "") => {
  const date = dateStr.trim() == "" ? new Date() : new Date(dateStr);
  const options = {
    hour: "numeric",
    minute: "numeric",
    day: "numeric",
    month: "numeric", // long,2-digit
    year: "numeric",
    weekday: "long",
  };
  // const day = String(date.getDay()).padStart(2, 0);
  // const month = String(date.getMonth()).padStart(2, 0);
  // const year = String(date.getFullYear()).padStart(2, 0);
  // const hour = String(date.getHours()).padStart(2, 0);
  // const min = String(date.getMinutes()).padStart(2, 0);
  // const sec = String(date.getSeconds()).padStart(2, 0);
  // return [day, month, year].join("/") + " " + [hour, min, sec].join(":");

  // "hi-IN"
  const locale = navigator.language;
  return new Intl.DateTimeFormat(locale, options).format(date);
};
// updates net balance of a user
const setCurrentBalance = (user) => {
  let initialBalance = 0;
  const balance = user.transactions.reduce((currentBalance, transaction) => {
    currentBalance += transaction.amount;
    return currentBalance;
  }, initialBalance);
  user.balance = balance;
};
// returns net balance of a user
const getCurrentBalance = (user) => {
  return user.balance;
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
// sets username,balance of a user
const formatUser = (user) => {
  user.name = user.name.toUpperCase();
  createUsername(user);
  user.transactions.forEach((transaction) => {
    transaction.desctiption = `${user.name} has ${
      transaction.amount > 0 ? "deposited" : "withdrew"
    } ${formatAmount(Math.abs(transaction.amount))} on ${transaction.date}`;
  });
};

// Common function to update innerHTML of an element
const updateContent = (elem, content) => {
  elem.innerHTML = content;
};

// Returns transaction html
const getTransactionHTML = (transaction, index) => {
  const type = transaction.amount > 0 ? "deposit" : "withdrawal";
  return `<div class="movements__row">
    <div class="movements__type movements__type--${type}">${index} ${type}</div>
    <div class="movements__date">${formatDate(transaction.date)}</div>
    <div class="movements__value">${formatAmount(
      Math.abs(transaction.amount)
    )}</div>
  </div>`;
};

// sorts transaction in ascending order
const sortTransactions = (transactions) => {
  transactions.sort((a, b) =>
    Math.abs(a.amount) > Math.abs(b.amount) ? -1 : 1
  );
  return transactions;
};

// update user transaction screen
const updateTransaction = (user, sort = false) => {
  updateContent(containerMovements, "");
  const transactions = sort
    ? sortTransactions(user.transactions.slice())
    : user.transactions;
  transactions.forEach((transaction, index) => {
    containerMovements.insertAdjacentHTML(
      "afterbegin",
      getTransactionHTML(transaction, index + 1)
    );
  });
};

// updates current balance on screen
const updateCurrentBalance = (user) => {
  setCurrentBalance(user);
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
// updates current time on screen
const updateDate = () => {
  updateContent(labelDate, formatDate());
};

const updateApp = (opacity) => {
  containerApp.style.opacity = opacity;
};

const updateUI = (user) => {
  updateCurrentBalance(user);
  updateTransaction(user);
  updateDepositeAmount(user);
  updateWithdrawalAmount(user);
  updateInterest(user);
  updateDate();
};

// Updates dashboard with user data
const initializeDashboard = (user) => {
  updateUI(user);
  updateApp(100);
};

// returns value of the specified element
const getFieldValue = (element) => element.value.trim();

// assigns value of the specified element
const setFieldValue = (element, value) => (element.value = value.trim());

const findUser = (users, username, password) => {
  return users.find(
    (user) => user.username == username && user.pin == password
  );
};
const findUserIndex = (users, username, password) => {
  return users.findIndex(
    (user) => user.username == username && user.pin == password
  );
};

const findUserByUsername = (users, username) => {
  return users.find((user) => user.username == username);
};

const resetForm = (...elements) => {
  elements.forEach((elem) => {
    setFieldValue(elem, "");
    elem.blur();
  });
};

const addTransaction = (user, amount, comment) => {
  user.transactions.push({
    date: new Date().toISOString(),
    amount: amount,
    comment: comment,
  });
};

const checkEligibility = (user, amount) => {
  // user is eligible for loan if any transaction is >= 10% of loan amount
  return user.transactions.some(
    (transaction) => transaction.amount >= amount * 0.1
  );
};

const resetTimeInterval = (timer, time, callbackFunction) => {
  console.log(timer);
  console.log(time);
  console.log(callbackFunction);
  if (timer) {
    clearInterval(timer);
  }
  callbackFunction();
};

// Enclosing functionality and variables in setup function
// It would enable using variables and functions with in the block scope.
const setup = (users) => {
  let currentUser, timer;
  let timerInterval = 0; // start right away
  let logoutInterval = 2 * 60; // 2 Minutes
  let sort = false;
  const startLogoutTimer = () => {
    console.log("Timer started");
    let time = logoutInterval;
    timer = setInterval(function () {
      let min = String(Math.trunc(time / 60)).padStart(2, 0);
      let sec = String(Math.trunc(time % 60)).padStart(2, 0);
      console.log(`Min:${min} Sec:${sec}`);
      updateContent(labelTimer, `${min}:${sec}`);
      if (time == 0) {
        updateApp(0);
      }
      time--;
    }, 1000); // Update clock after 1s
  };

  const login = (event) => {
    event.preventDefault();
    // Enclosed function can access variables from the parent function example currentUser
    const username = getFieldValue(inputLoginUsername);
    const password = getFieldValue(inputLoginPin);
    currentUser = findUser(users, username, password);
    if (currentUser) {
      resetTimeInterval(timer, timerInterval, startLogoutTimer);
      initializeDashboard(currentUser);
    } else updateApp(0);
    resetForm(inputLoginUsername, inputLoginPin);
  };

  const closeAccount = (event) => {
    event.preventDefault();
    const username = getFieldValue(inputCloseUsername);
    const password = getFieldValue(inputClosePin);
    const closeAccountIndex = findUserIndex(users, username, password);
    if (closeAccountIndex != -1 && users[closeAccountIndex] == currentUser) {
      // users.slice(0,closeAccountIndex).concat(users.slice(closeAccountIndex+1)
      users.splice(closeAccountIndex, 1);
      updateApp(0);
    }

    resetForm(inputCloseUsername, inputClosePin);
  };

  const sortTransaction = (event) => {
    event.preventDefault();
    resetTimeInterval(timer, timerInterval, startLogoutTimer);
    updateTransaction(currentUser, !sort);
    sort = !sort;
  };
  const requestLoan = (event) => {
    event.preventDefault();
    resetTimeInterval(timer, timerInterval, startLogoutTimer);
    const amount = getFieldValue(inputLoanAmount);
    if (isFinite(amount) && amount > 0) {
      const isEligible = checkEligibility(currentUser, amount);
      if (isEligible) {
        // Transfer amount
        addTransaction(currentUser, Math.ceil(amount), `Loan received`);
        updateUI(currentUser);
      }
    }
    resetForm(inputLoanAmount);
  };

  const transfer = (event) => {
    event.preventDefault();
    resetTimeInterval(timer, timerInterval, startLogoutTimer);
    const username = getFieldValue(inputTransferTo);
    const amount = Number.parseFloat(getFieldValue(inputTransferAmount));
    const transferAccount = findUserByUsername(users, username);
    if (
      typeof transferAccount != "undefined" &&
      currentUser != transferAccount &&
      Number.isFinite(amount) &&
      amount > 0 &&
      currentUser.balance >= amount
    ) {
      // Transfer amount
      addTransaction(
        currentUser,
        -amount,
        `Amount transferred to ${transferAccount.name}`
      );

      addTransaction(
        transferAccount,
        amount,
        `Amount received from ${currentUser.name}`
      );

      updateUI(currentUser);
    }
    resetForm(inputTransferTo, inputTransferAmount);
  };

  /*****************************
   *  Event Listeners
   */

  btnLogin.addEventListener("click", login);
  btnTransfer.addEventListener("click", transfer);
  btnClose.addEventListener("click", closeAccount);
  btnSort.addEventListener("click", sortTransaction);
  btnLoan.addEventListener("click", requestLoan);
};
// Initialise application code
// Use forEach where no new array is required
users.forEach(formatUser);
setup(users);
