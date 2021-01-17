"use strict";
const allowedDocTypes = ["doc", "docx", "ppt", "pptx", "pdf"];
var allowedImgTypes = ["jpg", "jpeg", "png", "gif"];

// checks if data is null
function isNull(val) {
  return typeof val == "undefined" || val == null;
}
function removeErrorMessageElements() {
  var errorElem = $(".error");
  $.each(errorElem, function (k, e) {
    e.remove();
  });
}

function clearErrorAndSuccessStatus() {
  removeErrorMessageElements();
  $(".error,.success").hide();
}

function appendErrorSpan(elem, msg) {
  const elemId = $(elem).attr("for");
  $(`span[for='${elemId}']`).remove();
  const errorMsg = `<span class='error' for='${elemId}'  aria-invalid='true'>${msg}</span> `;
  $(elem).parent().append(errorMsg);
}
function resetForm(formID) {
  $("#" + formID)
    .get(0)
    .reset();
}

function trimString(str) {
  return str.trim();
}

function isEmpty(str) {
  return str.trim() === "";
}

function validateEmail(emailStr) {
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  return reg.test(emailStr);
}

function validatePassword(passStr) {
  var lowerCaseLetters = /[a-z]/g;
  var upperCaseLetters = /[A-Z]/g;
  var numbers = /[0-9]/g;
  var reg = /^([a-zA-Z0-9]{8,50})$/;
  return (
    lowerCaseLetters.test(passStr) &&
    upperCaseLetters.test(passStr) &&
    numbers.test(passStr)
  );
}

function validatePhone(phoneStr) {
  var reg = /^([0-9]{10})$/;
  return reg.test(phoneStr);
}

function validatePincode(pincodeStr) {
  var reg = /^([0-9]{6})$/;
  return reg.test(pincodeStr);
}

function validateName(nameStr) {
  var reg = /^\s*[a-zA-Z\s]+\s*$/;
  return reg.test(nameStr);
}

function validateLetterAndSpaces(str) {
  return /^[A-z ]+$/.test(str);
}

function validateAlphaNumericHyphenAndSpaces(str) {
  return /^[\w.\- ]+$/.test(str);
}

function url_validate(userUrl) {
  var regUrl = /^(((ht|f){1}(tp:[/][/]){1})|((www.){1}))[-a-zA-Z0-9@:%_\+.~#?&//=]+$/;

  return regUrl.test(userUrl);
}
function disableElement(elementID) {
  $("#" + elementID).attr("disabled", "disabled");
}
function enableElement(elementID) {
  $("#" + elementID).removeAttr("disabled");
}

function getElementType(elem) {
  let fieldType = $(elem).attr("type");
  if ($(elem).is("select")) {
    fieldType = "select";
  } else if ($(elem).is("textarea")) {
    fieldType = "textarea";
  } else if ($(elem).is("input:text")) {
    fieldType = "text";
  } else if ($(elem).is("input:file")) {
    fieldType = "file";
  } else if ($(elem).is("input:checkbox")) {
    fieldType = "checkbox";
  } else if ($(elem).is("input:radio")) {
    fieldType = "radio";
  }

  return fieldType;
}
function checkFileUploadExt(elemID, type) {
  console.log("#" + elemID);
  const elem = document.getElementById(elemID);
  const filelength = elem.files.length;
  console.log("Len", filelength);
  let isValid = true;
  for (let i = 0; i < filelength; i++) {
    const file = elem.files[i];
    const fileName = file.name;
    const fileExt = fileName
      .substr(fileName.lastIndexOf(".") + 1)
      .toLowerCase();

    switch (type) {
      case "image":
        isValid = allowedImgTypes.includes(fileExt);
        break;
      case "doc":
        isValid = allowedDocTypes.includes(fileExt);
        break;
    }
    if (!isValid) {
      break;
    }
  }
  return isValid;
}
function validateForm(buttonElementID, formID, modalID) {
  let isValid = true;
  clearErrorAndSuccessStatus();
  disableElement(buttonElementID);
  const form = $("#" + formID)[0];

  $.each(form.elements, function (index, elem) {
    const e = $(elem);
    let fieldValue = "";
    let fieldId = e.attr("id");
    let fieldName = e.attr("name");
    let fieldType = getElementType(elem);
    let isRequired = !e.prop("required") ? false : true;
    let validator = !e.attr("jsValidator") ? "" : e.attr("jsValidator");
    let requiredErr = !e.attr("requiredMsg") ? "" : e.attr("requiredMsg");
    let invalidErr = !e.attr("invalidMsg") ? "" : e.attr("invalidMsg");
    let filetype = !e.attr("filetype") ? "" : e.attr("filetype");
    let isCorrect = true;
    if (!isNull(fieldType) && !isNull(fieldName)) {
      switch (fieldType) {
        case "text":
        case "email":
        case "password":
        case "tel":
        case "number":
        case "textarea":
        case "file":
          var values = [];
          $.each($("input[name='" + fieldName + "']"), function () {
            values.push($(this).val());
          });
          fieldValue = trimString(values.join(", "));
          break;
        case "checkbox":
        case "radio":
          var values = [];
          $.each($("input[name='" + fieldName + "']:checked"), function () {
            values.push($(this).val());
          });
          fieldValue = trimString(values.join(", "));
          break;
        case "select":
          var values = [];
          $.each(
            $("select[name='" + fieldName + "'] option:selected"),
            function () {
              values.push($(this).val());
            }
          );
          fieldValue = trimString(values.join(", "));
          break;
      }
      console.log("Field Value", fieldValue);
      if (isRequired && fieldValue == "") {
        isValid = false;
        appendErrorSpan($("label[for='" + fieldName + "']"), requiredErr);
      } else if (validator != "" && fieldValue != "") {
        switch (validator) {
          case "validateName":
            isCorrect = validateName(fieldValue);
            break;
          case "validateEmail":
            isCorrect = validateEmail(fieldValue);
            break;
          case "validatePassword":
            isCorrect = validatePassword(fieldValue);
            break;
          case "checkFileUploadExt":
            isCorrect = checkFileUploadExt(fieldId, filetype);
            break;
        }
        console.log(isCorrect);
        if (!isCorrect) {
          isValid = false;
          console.log(fieldName);
          appendErrorSpan($("label[for='" + fieldName + "']"), invalidErr);
        }
      }
      console.log(
        index +
          " -- " +
          fieldValue +
          " -- " +
          fieldType +
          " -- " +
          isRequired +
          " -- " +
          validator +
          " -- " +
          requiredErr +
          " -- " +
          invalidErr +
          " -- " +
          isCorrect
      );
    }
  });

  if (isValid) {
    ajaxFormSubmit(formID);
  } else {
    enableElement(buttonElementID);
  }
  return isValid;
}

function ajaxFormSubmit(formID, buttonElementID) {
  const method = $("form[name='" + formID + "']").attr("method");
  const url = $("form[name='" + formID + "']").attr("action");
  const fd = new FormData($("#" + formID)[0]);
  console.log(formID, method, url);
  console.log(fd);
  $.ajax({
    url: url,
    type: method,
    data: fd,
    success: function (data) {
      alert("success");
      console.log(data);
      enableElement(buttonElementID);
    },
    error: function (data) {
      alert("error");
    },
    complete: function (data) {
      console.log(data);
      enableElement(buttonElementID);
    },
    cache: false,
    contentType: false,
    processData: false,
  });
}
