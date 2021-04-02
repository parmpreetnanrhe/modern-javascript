"use strict";

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector(".form");
const containerWorkouts = document.querySelector(".workouts");
const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(".form__input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--cadence");
const inputElevation = document.querySelector(".form__input--elevation");

const showGeoLocationAlert = function () {
  alert("Could not get your position.");
};

const initMapScreen = function (position) {
  let map;
  initialiseMap(position, map);
  // event handlers
};
// Initialise map object
const initialiseMap = function (position, map) {
  let mapEvent;
  // destructuring position.coords object
  const { latitude, longitude } = position.coords;
  map = L.map("map").setView([latitude, longitude], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  // Add event listener on map
  const openForm = function (mapE) {
    form.classList.remove("hidden");
    inputDistance.focus();
    mapEvent = mapE;
    console.log(mapEvent);
  };

  const formSubmit = function (event) {
    event.preventDefault();
    let workoutType = inputType.value;
    const { lat, lng } = mapEvent.latlng;
    L.marker([lat, lng])
      .addTo(map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workoutType}-popup`,
        })
      )
      .setPopupContent(
        `<b>${workoutType[0].toUpperCase().concat(workoutType.slice(1))}</b>`
      )
      .openPopup();
    inputDuration.value = inputDistance.value = inputElevation.value = inputCadence.value =
      "";
  };
  // Event Listeners
  map.on("click", openForm);
  form.addEventListener("submit", formSubmit);
};

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(initMapScreen, showGeoLocationAlert);
}

// Event Handling
inputType.addEventListener("change", function () {
  inputCadence.closest(".form__row").classList.toggle("form__row--hidden");
  inputElevation.closest(".form__row").classList.toggle("form__row--hidden");
});
