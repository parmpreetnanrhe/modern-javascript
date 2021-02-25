"use strict;";
// Creating Map
let map = new Map();
// Adding elements in map
map
  .set("title", "Quiz")
  .set("Description", "This is a dummy quiz.")
  .set(true, "MCQ");

// Creating array of map
let questions = [];
let question1 = new Map()
  .set("question", "Which language runs on browser?")
  .set("option", ["ASP", "JSP", "Javascript"])
  .set("correct", "Javascript")
  .set(true, "Congratulations")
  .set(false, "Better luck next time!");
let question2 = new Map()
  .set("question", "Which language runs on client side?")
  .set("option", ["ASP", "JSP", "Javascript"])
  .set("correct", "Javascript")
  .set(true, "Congratulations")
  .set(false, "Better luck next time!");
let question3 = new Map()
  .set("question", "Which is client side language?")
  .set("option", ["ASP", "JSP", "Javascript"])
  .set("correct", "Javascript")
  .set(true, "Congratulations")
  .set(false, "Better luck next time!");
let question4 = new Map()
  .set(
    "question",
    "Which language should be used to validate form before submission?"
  )
  .set("option", ["ASP", "JSP", "Javascript"])
  .set("correct", "Javascript")
  .set(true, "Congratulations")
  .set(false, "Better luck next time!");
let question5 = new Map()
  .set("question", "EGMAScript is also known as:")
  .set("option", ["ASP", "JSP", "Javascript"])
  .set("correct", "Javascript")
  .set(true, "Congratulations")
  .set(false, "Better luck next time!");

// Adding questions in array
questions.push(question1);
questions.push(question2);
questions.push(question3);
questions.push(question4);
questions.push(question5);
// Add questions map
map.set("questions", questions);

// updateHTML update to populate selected element content
const updateHTML = (selector, html, append = false) => {
  if (append) {
    document.querySelector(selector).innerHTML += html;
  } else {
    document.querySelector(selector).innerHTML = html;
  }
};

const updateOptions = (selector, questionCounter) => {
  const options = map.get("questions")[questionCounter].get("option");
  updateHTML("#options", "");
  // Loop over options
  options.forEach((option, index) => {
    const html = `<input type="radio" name="option" id="option${index}" value="${option}">
  <label for="option${index}">${option}</label>`;
    updateHTML("#options", html, true);
  });
};

const updateButtons = (selector, questionCounter) => {
  updateHTML("#buttons", "");
  if (questionCounter > 0) {
    // Display Previous button
    updateHTML(
      "#buttons",
      `<button type="button" name="prevBtn" id="prevBtn" onClick="prevQuestion()">Previous</button>`,
      true
    );
  }
  if (questionCounter == totalQuestion - 1) {
    // Displays finish button on last question

    updateHTML(
      "#buttons",
      `<button type="button" name="finishBtn" id="finishBtn" onClick="finishQuiz()">Finish</button>`,
      true
    );
  } else {
    // Display next button
    updateHTML(
      "#buttons",
      `<button type="button" name="nextBtn" id="nextBtn" onClick="nextQuestion()">Next</button>`,
      true
    );
  }
};
// updateQuestion displays given question screen
const updateQuestion = (questionCounter) => {
  const question = map.get("questions")[questionCounter];
  // Displays question prompt
  updateHTML("#question", question.get("question"));
  // Displays question options
  updateOptions("#options", questionCounter);
  // Displays question buttons
  updateButtons("#buttons", questionCounter);
};

const updateAnswer = () => {
  const selectedOption = document.querySelector('input[name="option"]:checked');
  if (selectedOption == null) {
    answers[currentQuestion] == undefined;
  } else {
    answers[currentQuestion] = selectedOption.value;
  }
};

// Display the selected option of previously attempted question
const updateSelectedOption = () => {
  const selectedOption = answers[currentQuestion];
  if (selectedOption !== null && typeof selectedOption !== "undefined") {
    const index = answers.indexOf(selectedOption);
    document.querySelector(`input[id='option${index}']`).checked = "checked";
  }
};

// Increment map key value by 1
// Maps are passed by reference
const incrementMapKey = (mapName, key) => {
  if (mapName.has(key)) {
    // increment key if already exists
    mapName.set(key, mapName.get(key) + 1);
  } else {
    // initialise key by 1 if not exists
    mapName.set(key, 1);
  }
};

// Calculate the correct, incorrect or unattempted questions
const compileResult = () => {
  let results = new Map();
  const questions = map.get("questions");
  questions.forEach((question, index) => {
    const element = answers[index];
    if (element !== null && typeof element !== "undefined") {
      if (element == question.get("correct")) {
        incrementMapKey(results, "Correct");
      } else {
        incrementMapKey(results, "Incorrect");
      }
    } else {
      incrementMapKey(results, "Unattempted");
    }
  });
  return results;
};

// nextQuestion displays next question on screen
const nextQuestion = () => {
  updateAnswer();
  updateQuestion(++currentQuestion);
  updateSelectedOption();
};
// prevQuestion displays previous question on screen
const prevQuestion = () => {
  updateAnswer();
  updateQuestion(--currentQuestion);
  updateSelectedOption();
};

// finishQuiz displays quiz results
const finishQuiz = () => {
  updateAnswer();
  let results = compileResult();
  updateHTML("#question", "Result");
  updateHTML("#options", "<h2>Statistics</h2>");
  for (let [key, value] of results) {
    updateHTML("#options", `<b>${key}:</b> ${value}<br/>`, true);
  }
  updateHTML("#buttons", "");
};
// currentQuestion holds the current question
// totalQuestion holds the total questions in the quiz
// answers store user answers
let currentQuestion, totalQuestion, answers;

// Initialises quiz
const initialise = (map) => {
  currentQuestion = 0;
  answers = [];
  // Update totalQuestion with the question count
  totalQuestion = map.get("questions").length;
  // Displays quiz title
  updateHTML("#quizTitle", map.get("title"));
  // updateQuestion displays first question on the screen
  updateQuestion(currentQuestion);
};

// Initialises the quiz
initialise(map);
