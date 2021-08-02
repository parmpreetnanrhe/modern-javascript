"use strict;";

// Event delegation model for handling show-modal button clicks
elemRegisterEvent({
  element: document,
  eventName: clickEvent,
  appendEventAsAnArgument: 1,
  funcs: [openModalEventHandler, formSubmitButtonClickedEventHandler],
});

// document.addEventListener(clickEvent, function (event) {
//   const targetElem = event.target;
//   // Event delegation model for handling show-modal button clicks
//   const modalElem = event.target?.closest(".show-modal");
//   if (modalElem) {
//     openModalEventHandler(event);
//     return;
//   }
//   // Event delegation model for handling form submit button clicks
//   const submitButton = event.target?.closest(".form-submit");
//   if (submitButton) formSubmissionHandler(event.target);
// });
