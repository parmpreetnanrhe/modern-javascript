// IIFE (Immediately Invoked Function Expression) for registering common event handlers

const registerEvents = () => {
  // Select elements available on page load
  const selectboxSelector = $all("select");
  const inputSelector = $all("input");
  const textAreaSelector = $all("textarea");
  // Event Listeners
  elemListRegisterEvent({
    elementNodes: [...inputSelector, ...selectboxSelector, ...textAreaSelector],
    eventName: blurEvent,
    funcs: [trimValueAttribute, updateFieldPlaceholder, turnOnAutocomplete],
  });
  elemListRegisterEvent({
    elementNodes: [...inputSelector, ...selectboxSelector, ...textAreaSelector],
    eventName: focusEvent,
    funcs: [turnOffAutocomplete],
  });
  elemListRegisterEvent({
    elementNodes: [...inputSelector, ...textAreaSelector],
    eventName: keydownEvent,
    appendEventAsAnArgument: 1,
    funcs: [allowOnlyLettersAndSpaces],
    args: undefined,
  });

  // Since callFunctionsOnElements contain functions array that accepts element as an argument
  // I am not specifing args propery as this function defines element as an argument by default
  callFunctionsOnElements({
    elementNodes: [...inputSelector, ...selectboxSelector, ...textAreaSelector],
    funcs: ["updateFieldPlaceholder"],
    // args: [...inputSelector, ...selectboxSelector, ...textAreaSelector],
  });
};

setTimeout(registerEvents, 1000);
