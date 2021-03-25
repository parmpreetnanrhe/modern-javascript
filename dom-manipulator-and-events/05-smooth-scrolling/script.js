/**********
 *  1. Smooth scrolling
 */

let mainMenu = document.querySelector("#main-menu");

mainMenu.addEventListener("click", function (event) {
  event.preventDefault();
  let link = event.target.closest(".link");
  if (!link) {
    return;
  }
  let scrollTo = link.getAttribute("href");
  document.querySelector(scrollTo).scrollIntoView({ behavior: "smooth" });
});
