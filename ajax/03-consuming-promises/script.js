"use strict";

const countriesContainer = document.querySelector(".countries");
const btn = document.querySelector(".btn-country");
const baseURL = "https://restcountries.eu/rest/v2/";
const countryByNameURL = baseURL + "name/";
const isoNameURL = baseURL + "alpha/";

const createPromise = function (url, errorMsg = "Something went wrong.") {
  // fetch opens a new promise
  const request = fetch(url).then((res) => {
    if (!res.ok) {
      throw new Error(errorMsg); // Dismiss Promise when some error occured
    }
    return res.json(); // json method coverts the data of the fullfilled promise and returns a new promise.
  });
  return request;
};

const renderCountryCard = function (data, className = "") {
  const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
    </article>
    `;

  return html;
};

const getCountryData = function (country) {
  const request = createPromise(
    `${countryByNameURL}${country}`,
    "Unable to fetch country."
  )
    .then((data) => {
      data = [...data][0]; // retrieving first element of the response json array
      const html = renderCountryCard(data);
      countriesContainer.insertAdjacentHTML("beforeend", html);
      countriesContainer.style.opacity = 1;
      const [neighbour, ...other] = data.borders;
      if (!neighbour) throw new Error("No neighbour exists!"); // Reject promise
      // retrieve neighboring country details after retrieving country's data
      return createPromise(
        `${isoNameURL}${neighbour}`,
        "Unable to fetch neighbouring country."
      ); // Return new Promise
    })
    // Consuming chained promise to render neighbouring country
    .then((data) => {
      const html = renderCountryCard(data, "neighbour");
      countriesContainer.insertAdjacentHTML("beforeend", html);
      countriesContainer.style.opacity = 1;
    })
    // Handle error that occurred while making any chained promises
    .catch((err) => alert(err.message))
    // Executing code irrespective of success/ failure of the promise
    .finally(() => console.log("Rendered data from the request."));
};

btn.addEventListener("click", (event) => {
  event.preventDefault();
  //   getCountryData("australia"); // Raises Unable to fetch neighbouring country. error
  //   getCountryData("abc"); // Raises Unable to fetch country. error
  getCountryData("china");
});
