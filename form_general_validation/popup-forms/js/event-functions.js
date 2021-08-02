/**************
 *  Events Name
 */
const loadEvent = "load";
const blurEvent = "blur";
const clickEvent = "click";
const focusEvent = "focus";
const changeEvent = "change";
const keydownEvent = "keydown";

/************************
 *  Event callback functions start
 */

// elemListRegisterEvent registers the event and callback function
// Note: elementNodes is the list retured from $all selector
const elemListRegisterEvent = ({
  elementNodes,
  eventName,
  funcs,
  appendEventAsAnArgument = 0,
  args = appendEventAsAnArgument
    ? undefined
    : Array(elementNodes.length)
        .fill()
        .map((_, i) => Array(funcs.length).fill(elementNodes[i])),
}) => {
  elementNodes.forEach((element, i) => {
    // When no args are passed then, Array of element is passed to the function
    // When ith argument is array, then it is passed to the function
    // otherwise,  Array of element is passed to the function

    let parameters = appendEventAsAnArgument
      ? undefined
      : Array.isArray(args[i])
      ? args[i]
      : [args[i]];
    console.error(
      element,
      eventName,
      funcs,
      parameters,
      appendEventAsAnArgument
    );
    elemRegisterEvent({
      element,
      eventName,
      funcs,
      args: parameters,
      appendEventAsAnArgument,
    });
  });
};

// elemRegisterEvent registers the event and callback function
const elemRegisterEvent = ({
  element,
  eventName,
  funcs,
  appendEventAsAnArgument = 0,
  args = appendEventAsAnArgument
    ? undefined
    : Array(funcs.length).fill(element),
}) => {
  console.warn(element, eventName, funcs, args);
  element.addEventListener(eventName, (event) => {
    if (appendEventAsAnArgument) {
      if (args) args.unshift(event);
      else args = Array(funcs.length).fill(event);
    }
    console.warn("callFunctionsOnElement", element, funcs, args);
    callFunctionsOnElement({
      elem: element,
      thisRef: element,
      funcs,
      args,
    });
  });
};

/************************
 *  Event callback functions end
 */
