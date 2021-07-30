"use strict;";
const registerBtn = $first("#registerBtn");
const pageContainer = $first("#pageContainer");

const registerUser = function (form) {
  updateAttribute(this, "disabled", "disabled");
  hideElements(".error");
  // Form id
  let formID = `${form.id}`;
  // Get all form fields
  const formElements = [...form.elements];
  // Validate field data
  const hasValidData = formElements.every((elem) => {
    return validateField({
      elem,
      displayErrorMessage: 1,
      errorParentNodeselector: ".form-group",
      errorNodePosition: "beforeend",
      errorTag: "span",
      tagClass: "error",
    });
  });
  // Remove Table details data
  removeElement(`#table-${formID}`);

  if (hasValidData) {
    // Display form details
    let tableAttributeList = [
      { name: "class", value: "table-responsive" },
      { name: "id", value: `table-${formID}` },
    ];
    appendElement(
      pageContainer,
      "beforeend",
      getFormDataInTable(`#${form.id}`, tableAttributeList)
    );
    scrollToView({ elem: $first(`#table-${formID}`) });
  }
  removeAttribute(this, "disabled");
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
