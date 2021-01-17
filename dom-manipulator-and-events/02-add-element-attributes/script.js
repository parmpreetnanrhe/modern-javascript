const dataAttributes = ["src", "jsvalidator", "requiredmsg", "invalidmsg"];
$(document).ready(function () {
  for (let i = 0; i < dataAttributes.length; i++) {
    console.log(dataAttributes[i]);
    $(`[data-${dataAttributes[i]}]`).each(function () {
      var element = $(this);
      element.attr(dataAttributes[i], element.data(dataAttributes[i]));
    });
  }
});
