"use strict;";

let modalButtons = document.querySelectorAll(".show-modal");
let modal = document.querySelector(".modal");
let overlay = document.querySelector(".overlay");
let closeButton = document.querySelector(".close-modal");
let paragraphButtons = document.querySelector(".paragraph-buttons");
let paragraphButtonsResult = document.querySelector(
  ".paragraph-buttons-result"
);
const getClassNames = (target, ...excludedclasses) => {
  const classes = target.classList.value
    .split(" ")
    .filter((className) => !excludedclasses.includes(className));
  console.log(classes);
  return classes;
};

const openModal = (event) => {
  // event.target returns reference to element associated with click event
  modal.classList.add(...getClassNames(event.target, "modal"));
  // console.log(modal.querySelector("h2").style.setProperty("color", "white"));
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closeModal = (event) => {
  modal.classList.remove(...getClassNames(event.target.parentElement, "modal"));
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// Register event listener
modalButtons.forEach((btn) => btn.addEventListener("click", openModal));
closeButton.addEventListener("click", closeModal);
document.addEventListener("keydown", (event) => {
  if (event.key == "Escape") closeModal();
});

// Registering events using event delegation modal
// Associating click event on the parent element instead of all child elements
paragraphButtons.addEventListener("click", (event) => {
  // Retreive data attribute of the clicked element (button)
  const paragraphCount = event.target.dataset.paragraphcount;
  if (isFinite(paragraphCount) && paragraphCount > 0) {
    paragraphButtonsResult.innerHTML = "";
    for (let i = 0; i < paragraphCount; i++) {
      let newParagraph = document.createElement("p");
      newParagraph.textContent = `Lorem ${
        i + 1
      }, ipsum dolor sit amet consectetur adipisicing elit. Cumque
    temporibus ullam fuga pariatur odio, voluptatibus tempore corporis in
    minima nulla neque maxime eius at repellendus, est iusto modi quis
    voluptatem?"`;
      paragraphButtonsResult.append(newParagraph);
    }
  }
});
