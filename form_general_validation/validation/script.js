"use strict;";
const registerBtn = $("#registerBtn");

const registerUser = function (form) {
  //   updateAttribute(this, "disabled", "disabled");
  hideElements(".error");
  // Get all form fields
  const formElements = [...form.elements];
  // Validate field data
  const validFields = formElements.every((elem) => {
    return validateField({
      elem,
      displayErrorMessage: 1,
      errorParentNodeselector: ".form-group",
      errorNodePosition: "beforeend",
      errorTag: "span",
      tagClass: "error",
    });
  });
  logWarning("valid registerUser ", validFields);
  return;
};

// Bind 'this' in registerUser with register button, and form argument with the parent form element
const registrationCallback = registerUser.bind(
  registerBtn,
  registerBtn.closest("form")
);

// register click event with register button
elemRegisterEvent({
  element: registerBtn,
  eventName: clickEvent,
  funcs: [registrationCallback],
});
