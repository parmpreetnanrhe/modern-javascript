"use strict;";
/************************
 *  Log Messages to console start
 */
// logMessage arrow function accepts variable length arguments and logs to the console as message
const logMessage = (...args) => {
  console.log(...args);
};

// logError arrow function accepts variable length arguments and logs to the console as error
const logError = (...args) => {
  console.error(...args);
};

// logWarning arrow function accepts variable length arguments and logs to the console as warning
const logWarning = (...args) => {
  console.warn(...args);
};

/************************
 *  Log Messages to console end
 */

/************************
 *  string functions start
 */
// trimString receives an argument and removed spaces
const trimString = (str) => (str + "").trim();

const covertToTitleCase = (sentence) =>
  (sentence + "")
    .toLowerCase()
    .split(" ")
    .map((word) => (word[0]?.toUpperCase() ?? "") + word.slice(1))
    .join(" ");
// titleCase arrow function accepts variable length arguments and convets them in title case
const titleCase = (...args) => args.map(covertToTitleCase);

// maskString accepts an object and returns the string masked with the given characters
const maskString = ({
  value,
  mask,
  maskInBegining = 1,
  displayStart = 0,
  displayEnd = value + "".length,
  length = value.length,
}) =>
  (value + "")
    .slice(displayStart, displayEnd)
    .padStart(maskInBegining ? length : 0, mask)
    .padEnd(!maskInBegining ? length : 0, mask);

/************************
 *  string functions end
 */

/************************
 *  number functions start
 */
// parseToNumber arrow function accepts variable length arguments and converts them number type
const parseToNumber = (...args) => {
  return args.map((value) => Number(value));
};

// sum arrow function accepts variable length arguments and return their sum
const sum = (...args) =>
  args.reduce(
    (previousValue, currentValue) => previousValue + Number(currentValue),
    0
  );

// hasNullOrUndefined verifies whether any null or undefined element exisits in the arguments
const hasNullOrUndefined = (...args) => {
  return args.some(
    (number) => typeof number === "undefined" || number === null
  );
};
// checkNumber arrow function accepts variable length arguments and check whether all are of number type
const checkNumber = (...args) => {
  return args.every((number) => typeof number == "number");
};

// checkNonEmpty arrow function accepts variable length arguments and verify whether they are non-empty
const checkNonEmpty = (...args) => {
  return (
    args.length > 0 &&
    args.every(
      (value) => !hasNullOrUndefined(value) && trimString(value) !== ""
    )
  );
};
// checkEmpty arrow function accepts variable length arguments and verify whether they are non-empty
const checkEmpty = (...args) => {
  return args.every(
    (value) => !hasNullOrUndefined(value) && trimString(value) === ""
  );
};

/************************
 *  number functions end
 */

/*****************
 *  Check field data entry starts
 */

// $("#firstName").addEventListener("keydown", event => checkNumberEntry(event));
const checkNumberEntry = function (event) {
  const keycode = event.which;
  if (
    !(
      event.shiftKey == false &&
      (keycode == 46 ||
        keycode == 8 ||
        keycode == 37 ||
        keycode == 39 ||
        (keycode >= 48 && keycode <= 57))
    )
  ) {
    event.preventDefault();
  }
  return true;
};

const allowOnlyDigits = (event) => {
  const keyCode = event.which;
  if (
    [46, 8, 9, 27, 13].includes(keyCode) ||
    // Allow: Ctrl+A, Command+A
    (keyCode === 65 && (event.ctrlKey === true || event.metaKey === true)) ||
    // Allow: home, end, left, right, down, up
    (keyCode >= 35 && keyCode <= 40)
  ) {
    // let it happen, don't do anything
    return;
  }
  // Ensure that it is a number and stop the keypress
  if (
    ((event.shiftKey || keyCode < 48 || keyCode > 57) &&
      (keyCode < 96 || keyCode > 105)) ||
    keyCode == 110 ||
    keyCode == 190
  ) {
    event.preventDefault();
  }

  return true;
};

const allowOnlyDigitsAndDecimals = (event) => {
  if (event.shiftKey == true) {
    event.preventDefault();
  }

  if (
    (event.keyCode >= 48 && event.keyCode <= 57) ||
    (event.keyCode >= 96 && event.keyCode <= 105) ||
    event.keyCode == 8 ||
    event.keyCode == 9 ||
    event.keyCode == 37 ||
    event.keyCode == 39 ||
    event.keyCode == 46 ||
    event.keyCode == 190
  ) {
  } else {
    event.preventDefault();
  }

  if (
    getAttributeValue(event.target, "value", "").indexOf(".") !== -1 &&
    event.keyCode == 190
  )
    event.preventDefault();
  //if a decimal has been added, disable the "."-button
};

const allowOnlyLettersAndSpaces = (event) => {
  if (!checkAlphaSpace(event.key === " " ? event.key + "a" : event.key))
    event.preventDefault();
};

/****************************
 * Check field data entry ends
 */

/************************
 *  validations functions start
 */

// checkEmail receives an argument and validates whether it is a valid e-mail id
const checkEmail = (...args) =>
  args.every((str) =>
    /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(
      trimString(str)
    )
  );

// checkPhone receives an argument and validates whether it is a valid phone number
const checkPhone = (...args) =>
  args.every((str) => /^([0-9]{10})$/.test(trimString(str)));

// checkPincode receives an argument and validates whether it is a valid pin code
const checkPincode = (...args) =>
  args.every((str) => /^([0-9]{6})$/.test(trimString(str)));

// checkAlphaSpace receives an argument and validates whether it is contains only aphabets and spaces
const checkAlphaSpace = (...args) =>
  args.every((str) => /^[A-z ]+$/.test(trimString(str)));

// checkAlphaSpace receives an argument and validates whether it is a valid url
const checkURL = (...args) =>
  args.every((str) =>
    /^(((ht|f){1}(tp:[/][/]){1})|((www.){1}))[-a-zA-Z0-9@:%_\+.~#?&//=]+$/.test(
      trimString(str)
    )
  );
// checkFileExtensions verifies whether all the files belongs to allowed size limit
// By default 15MB file size is allowed
const checkFileSize = function (sizeLimit = 15 * 1000000) {
  if (!this || !this.files || !this.files.length) return false;
  const files = [...this.files];
  return files.every((file) => file.size <= sizeLimit);
};

// checkFileExtensions verifies whether all the files belongs to allowed extentions
// It is defined using function expression to allow passing this keyword reference
const checkFileExtensions = function (allowedExtentions = []) {
  if (!this || !this.files || !this.files.length) return false;
  const fileNames = getFileNames(this);
  return fileNames.every(
    (fileName) =>
      fileName.length &&
      allowedExtentions.includes(
        fileName.toLowerCase().slice(fileName.lastIndexOf(".") + 1)
      ) &&
      fileName.lastIndexOf(".") > -1
  );
};

// checkDocumentFiles verifies whether the element contains only docs files
// It is defined using function expression to allow passing this keyword reference
const checkDocumentFiles = function () {
  return checkFileExtensions.call(this, ["doc", "docx", "ppt", "pptx", "pdf"]);
};

// checkImageFiles verifies whether the element contains only image files
// It is defined using function expression to allow passing this keyword reference
const checkImageFiles = function () {
  // Bind this keyword of checkImageFiles function with checkFileExtensions function
  return checkFileExtensions.call(this, ["png", "jpeg", "jpg", "gif"]);
};
const checkName = checkAlphaSpace;

/************************
 *  validations functions end
 */

/************************
 *  Element functions start
 */

const getFileNames = (elem) => {
  if (!elem || !elem.files || !elem.files.length) return [];
  return [...elem.files].map((file) =>
    (file.name ?? file.fileName ?? "").trim()
  );
};

// hideElements hides errors from the page
const hideElements = (selector) => {
  $all(`${selector}`).forEach((elem) => {
    // Remove element from HTML
    elem.remove();
  });
};

// updateAttribute modifies element property
const updateAttribute = (elem, attribute, value) => {
  try {
    elem[`${attribute}`] = value;
  } catch (err) {
    logError(err);
  }
};

// removeAttribute removes attribute from element
const removeAttribute = (elem, attribute) => {
  try {
    elem[`${attribute}`] = false;
  } catch (err) {
    logError(err);
  }
};

// getAttributeValue returns attribute value.
// In case attribute is not set then "" is returned by default
// if null or undefined as the default value is set then undefined is returned
const getAttributeValue = (elem, attribute, defaultValue = "") =>
  elem[`${attribute}`] ?? defaultValue ?? undefined;

// removeDataAttribute removes attribute from element
const removeDataAttribute = (elem, attribute) => {
  if (elem) delete elem.dataset[`${attribute}`];
};

// getDataAttributeValue returns attribute value.
// In case attribute is not set then "" is returned by default
// if null or undefined as the default value is set then undefined is returned
const getDataAttributeValue = (elem, attribute, defaultValue = "") =>
  elem?.dataset[`${attribute}`] ?? defaultValue ?? undefined;

// getFormElementType returns form element type
const getFormElementType = (elem) => {
  let elemType = elem.nodeName.toLowerCase();
  switch (elemType) {
    case "input":
      let type = getAttributeValue(elem, "type", elemType);
      if (!type) logWarning(elem, type);
      else type = (type + "").toLowerCase();
      switch (type) {
        default:
          return type;
      }
      break;
    default:
  }
  return elemType;
};

// getFieldDetails returns form field details
const getFieldDetails = (elem) => {
  let value = "";
  let valueArray = [];
  const type = getFormElementType(elem);
  const name = getAttributeValue(elem, "name");
  const id = getAttributeValue(elem, "id");
  const validatorString = getDataAttributeValue(elem, "validator", "").trim();
  const validator = validatorString == "" ? [] : validatorString.split(",");

  const validatorType = getDataAttributeValue(elem, "validationtype", "");
  switch (type) {
    case "text":
    case "email":
    case "password":
    case "tel":
    case "number":
      value = getAttributeValue($(`input[name="${name}"]`), "value", "");
      valueArray.push(value);
      break;
    case "textarea":
      value = getAttributeValue($(`textarea[name="${name}"]`), "value", "");
      valueArray.push(value);
      break;
    case "file":
      valueArray = getFileNames($(`input[name="${name}"]`));
      value = valueArray.join(",");
      break;
    case "checkbox":
    case "radio":
      valueArray = [...$all(`input[name="${name}"]:checked`)].map((elem) =>
        (elem.value + "").trim()
      );
      value = valueArray.join(",");
      break;
    case "select":
      valueArray = [
        ...[...$(`select[name="${name}"]`).selectedOptions],
      ].map((elem) => elem.value.trim());
      value = valueArray.join(",");
      break;
  }
  return {
    id,
    validator,
    value,
    valueArray,
    type,
    name,
    validatorType,
  };
};

// getFormElementLabel returns element label
const getFormElementLabel = ({
  elem,
  parentNodeselector = ".form-group",
  elementLabelSelector = "label",
}) =>
  elem
    ?.closest(`${parentNodeselector}`)
    ?.parentElement.querySelector(`${elementLabelSelector}`)?.innerHTML ??
  getAttributeValue(elem.name);

// appendToParentElement appends HTML to the element
const appendToParentElement = ({
  elem,
  parentNodeselector,
  position,
  tag,
  tagClass,
  data,
}) =>
  elem
    ?.closest(`${parentNodeselector}`)
    ?.insertAdjacentHTML(
      `${position}`,
      `<${tag} class="${tagClass}">${data}</${tag}>`
    ) ?? undefined;

/************************
 *  Element functions end
 */

/****************************
 *  Form Field Operations start
 **/

// getFieldErrorMessage returns the error message
const getFieldErrorMessage = (elem, failedValidatorName) => {
  // Fetch field name
  const label = getFormElementLabel({ elem });
  let message = "";
  // Get message from pre-defined formats
  switch (failedValidatorName) {
    case "checkNonEmpty":
      message = `${label} field is mandatory`;
      break;
    case "checkNumber":
      message = `${label} should contain only numeric values`;
      break;
    case "checkURL":
    case "checkPincode":
    case "checkPhone":
    case "checkEmail":
      message = `Enter valid ${label}`;
      break;
    case "checkAlphaSpace":
    case "checkName":
      message = `${label} should contain only alphabets or spaces`;
      break;
    case "checkDocumentFiles":
      message = `Select valid document file(s)`;
      break;
    case "checkImageFiles":
      message = `Select valid image file(s)`;
      break;
    default:
      message = `Add validation error message for ${failedValidatorName} validator in function: getFieldErrorMessage`;
  }
  // Return message
  return message;
};

// validateFieldData data with mutiple validator calls
const validateFieldData = ({
  thisRef,
  valueArray,
  validatorArray,
  validatorType,
}) => {
  // return true when no validator functions are defined
  if (validatorArray.length == 0) return true;

  // return false when validators relation does not belong to allowed types
  // every will check wether all validators are satisfied
  // some/any would return true when at least one validation rule is satisfied
  if (!["every", "some", "any"].includes((validatorType + "").toLowerCase()))
    return false;
  // Returns validation result
  return validatorType.toLowerCase() === "every"
    ? validatorArray.every((func) =>
        callFunc({
          func,
          thisRef,
          args: valueArray,
        })
      )
    : validatorArray.some((func) =>
        callFunc({
          func,
          thisRef,
          args: valueArray,
        })
      );
};

// validateField verifies whether form field satisfies associated validations
const validateField = ({
  elem,
  displayErrorMessage = 0,
  errorParentNodeselector = ".form-group",
  errorNodePosition = "beforeend",
  errorTag = "span",
  tagClass = "error",
}) => {
  let validatorArray, valueArray, validatorType;
  // Fetch elem data details
  ({ validator: validatorArray, validatorType, valueArray } = getFieldDetails(
    elem
  ));
  // validate details
  let isCorrect = validateFieldData({
    thisRef: elem,
    valueArray,
    validatorArray,
    validatorType,
  });
  if (!isCorrect) {
    // when user has entered incorrect data, get which validator failed and print error message
    // Here Array(size_of_array).fills(elements_at_ith_position) creates an array of size n and add elements at each index
    const failedValidationIndex = callFunctionsOnElement({
      elem,
      funcs: validatorArray,
      args: Array(validatorArray.length).fill(...valueArray), // Passes field value as an argument for each validator function
    }).findIndex((element) => element == false);
    // Fetch error message of the first failed validation
    const errorMsg = getFieldErrorMessage(
      elem,
      validatorArray[failedValidationIndex]
    );
    if (displayErrorMessage) {
      // display error message on screen
      appendToParentElement({
        elem,
        data: errorMsg,
        parentNodeselector: errorParentNodeselector,
        position: errorNodePosition,
        tag: errorTag,
        tagClass,
      });
    }
  }
  // return data validation status
  return isCorrect;
};

// trimAttribute removes spaces from the element attribute
const trimAttribute = ({ elem, attribute }) => {
  updateAttribute(
    elem,
    attribute,
    trimString(getAttributeValue(elem, attribute, ""))
  );
};

// modifyElementAttribute calls fn by passing element and attribute as a bunction
const modifyElementAttribute = (elem, attribute, fn) => {
  fn({ elem, attribute });
};

// trimValueAttribute removes spaces from the element
const trimValueAttribute = (elem) =>
  getFormElementType(elem) === "file"
    ? ""
    : modifyElementAttribute(elem, "value", trimAttribute);

// updateFieldPlaceholder adds placeholder with the nearest label content
const updateFieldPlaceholder = (elem) => {
  updateAttribute(
    elem,
    "placeholder",
    "Enter " + getFormElementLabel({ elem })
  );
};

// turnOffAutocomplete turns off autocompleter of form field
const turnOffAutocomplete = (elem) => {
  const value = navigator.userAgent.indexOf("Chrome") != -1 ? "no-fill" : "off";
  updateAttribute(elem, "autocomplete", value);
};

// turnOnAutocomplete turns on autocompleter of form field
const turnOnAutocomplete = (elem) => {
  removeAttribute(elem, "autocomplete");
};

/****************************
 *  Form Field Operations end
 **/

/************************
 *  querySelector functions start
 */
// Defining jquery style query selector
// selects single element
const $ = (selector) => document.querySelector(selector);
// selects all element
const $all = (selector) => document.querySelectorAll(selector);
/************************
 *  querySelector functions end
 */

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
  element.addEventListener(eventName, (event) => {
    if (appendEventAsAnArgument) {
      if (args) args.unshift(event);
      else args = Array(funcs.length).fill(event);
    }
    callFunctionsOnElement({
      elem: element,
      thisRef: appendEventAsAnArgument ? event : element,
      funcs,
      args,
    });
  });
};

/************************
 *  Event callback functions end
 */

/****************************
 *  Higher order functions start
 */

// Call function from string (function name)
const callFunc = ({ func, thisRef = null, args }) => {
  // return undefined when func is not a string value
  if (typeof func !== "string") return undefined;
  // get function object from string name
  const fn = eval(`${func}`);
  if (typeof fn !== "function") return undefined;
  return (
    // It maps thisRef with this keyword in called function

    fn.call(thisRef, ...args)
  );
};
// callFunctionsOnElement runs function by passing element as an attribute
const callFunctionsOnElement = ({ elem, thisRef = elem, funcs, args = [] }) => {
  // returns array of functions results
  return funcs.map((func) =>
    // When user has passed a function reference then call it directly.
    // Otherwise, call 'callFunc' method
    typeof func === "function"
      ? func.call(thisRef, ...args)
      : callFunc({ func, thisRef, args })
  );
};
// callFunctionsOnElements runs function by passing element as an attribute on every element
const callFunctionsOnElements = ({
  elementNodes = [],
  thisRefs = elementNodes,
  funcs = [],
  valueArray = elementNodes, // Passes element nodes as an argument,
}) =>
  // returns array of functions result
  elementNodes.map((element, i) => {
    console.warn("in callFunctionsOnElements", thisRefs[i]);
    // Call all functions on the element
    callFunctionsOnElement({
      elem: element,
      funcs,
      thisRef: thisRefs[i],
      // In case of 1-D array pass ith element as an array value
      // In case of 2-D array pass ith Array as function argument
      args: Array.isArray(valueArray[i]) ? valueArray[i] : [valueArray[i]],
    });
  });

/****************************
 *  Higher order functions ends
 */
