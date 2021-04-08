"use strict";

const countriesContainer = document.querySelector(".countries");
const baseURL = "https://restcountries.eu/rest/v2/";
const countryByNameURL = baseURL + "name/";
const isoNameURL = baseURL + "alpha/";

const createAJAXRequest = function (url) {
  const request = new XMLHttpRequest();
  request.open("GET", url);
  request.send();
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
  const request = createAJAXRequest(`${countryByNameURL}${country}`);
  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    const html = renderCountryCard(data);
    countriesContainer.insertAdjacentHTML("beforeend", html);
    countriesContainer.style.opacity = 1;
    const [neighbour, ...other] = data.borders;
    console.log(neighbour);
    if (!neighbour) return;
    console.log(neighbour);
    // retrieve neighboring country details after retrieving country's data
    const request2 = createAJAXRequest(`${isoNameURL}${neighbour}`);
    console.log(request2);
    request2.addEventListener("load", function () {
      const data = JSON.parse(this.responseText);
      console.log(this.responseText);
      const html = renderCountryCard(data, "neighbour");
      countriesContainer.insertAdjacentHTML("beforeend", html);
      countriesContainer.style.opacity = 1;
    });
  });
};

// The following code are running in asyn mode.
getCountryData("portugal");
getCountryData("usa");
getCountryData("germany");
