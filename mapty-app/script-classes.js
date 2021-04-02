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

// Validation functions
const validateNumber = (...inputs) =>
  inputs.every((inp) => Number.isFinite(inp));

const allPositives = (...inputs) => inputs.every((inp) => inp > 0);
// implements standard date format
const formatDate = (date) => {
  // const date = dateStr.trim() == "" ? new Date() : new Date(dateStr);
  const options = {
    /* hour: "numeric",
    minute: "numeric",
    */ day: "numeric",
    month: "long", // long,2-digit
    year: "numeric",
    //weekday: "long",
  };
  const locale = navigator.language;
  return new Intl.DateTimeFormat(locale, options).format(date);
};
class Workout {
  _id;
  _distance;
  _duration;
  _coords;
  _date;
  constructor(coords, distance, duration) {
    this.coords = coords;
    this.distance = distance;
    this.duration = duration;
    this.date = new Date();
    this.id = new Date().getTime() + "";
  }
  set id(value) {
    this._id = value;
  }
  get id() {
    return this._id;
  }
  set distance(value) {
    this._distance = value;
  }
  get distance() {
    return this._distance;
  }
  set duration(value) {
    this._duration = value;
  }
  get duration() {
    return this._duration;
  }
  set coords(value) {
    this._coords = value;
  }
  get coords() {
    return this._coords;
  }
  set date(value) {
    this._date = value;
  }
  get date() {
    return this._date;
  }
}

class Running extends Workout {
  _cadence;
  _pace;
  _type = "Running";
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.pace;
  }
  set cadence(value) {
    this._cadence = value;
  }
  get cadence() {
    return this._cadence;
  }

  get pace() {
    this._pace = this.duration / this.distance;
    return this._pace;
  }
  get title() {
    return `${this._type} on ${formatDate(this.date)}`;
  }
}

class Cycling extends Workout {
  _elevationGain;
  _speed;
  _type = "Cycling";
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;

    this.speed;
  }
  set elevationGain(value) {
    this._elevationGain = value;
  }
  get elevationGain() {
    return this._elevationGain;
  }

  get speed() {
    this._speed = this.distance / (this.duration / 60);
    return this._speed;
  }

  get title() {
    return `${this.constructor.name} on ${formatDate(this.date)}`;
  }
}

class App {
  // Defining Fields
  _map;
  _mapZoomLevel = 13;
  _mapEvent;
  _workout;
  constructor() {
    this._getPosition();
    // Get local storage
    this._getLocalStorage();
    // Event Handling
    form.addEventListener("submit", this._newWorkout.bind(this));

    inputType.addEventListener("change", this._toggleElevationField.bind(this));

    containerWorkouts.addEventListener("click", this._moveToPopUp.bind(this));
  }
  _setLocalStorage() {
    localStorage.setItem("workouts", JSON.stringify(this._workout));
  }
  _getLocalStorage() {
    this._workout = [];
    const data = JSON.parse(localStorage.getItem("workouts"));
    if (!data) return;
    this._workout = data.map((entry) => {
      let work;
      switch (entry._type) {
        case "Running":
          work = new Running(
            entry._coords,
            entry._distance,
            entry._duration,
            entry._cadence
          );
          break;
        case "Cycling":
          work = new Cycling(
            entry._coords,
            entry._distance,
            entry._duration,
            entry._elevationGain
          );
          break;
      }
      return work;
    });

    this._workout.forEach((work) => {
      this._renderWorkoutList(work);
    });
  }
  // Moves focus to the marker
  _moveToPopUp(e) {
    const workoutElem = e.target.closest(".workout");
    if (!workoutElem) {
      return;
    }
    const selectedId = workoutElem.dataset.id;
    const workout = this._workout.find((entry) => entry.id === selectedId);
    this._map.setView(workout.coords, this._mapZoomLevel, {
      animate: true,
      pan: { duration: 1 },
    });
  }
  // Displays alert if coordinates are not accessible
  _showGeoLocationAlert() {
    alert("Could not get your position.");
  }
  // retrieves coordinates are accessible
  _getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        this._showGeoLocationAlert
      );
    }
  }
  // Loads map with the current location
  _loadMap(position) {
    // destructuring position.coords object
    const { latitude, longitude } = position.coords;
    this._map = L.map("map").setView([latitude, longitude], this._mapZoomLevel);

    L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this._map);
    // Event Listeners
    this._map.on("click", this._showForm.bind(this));
    // Render all markers
    this._workout.forEach((work) => {
      this._renderWorkoutMarker(work);
    });
  }
  // Displays form on the screen
  _showForm(mapE) {
    form.classList.remove("hidden");
    inputDistance.focus();
    this._mapEvent = mapE;
  }
  // Hides form on the screen
  _hideForm() {
    form.classList.add("hidden");
    setTimeout(() => {
      form.style.display = "grid";
    }, 1000);
  }
  // Clears Form data
  _resetForm() {
    inputDuration.value = inputDistance.value = inputElevation.value = inputCadence.value =
      "";
  }
  // Hide/Show Form fields
  _toggleElevationField() {
    inputCadence.closest(".form__row").classList.toggle("form__row--hidden");
    inputElevation.closest(".form__row").classList.toggle("form__row--hidden");
  }
  // Adds new Workout
  _newWorkout(event) {
    event.preventDefault();
    // Get data from the form
    const workoutType = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    let workout;
    const { lat, lng } = this._mapEvent.latlng;
    switch (workoutType) {
      case "running":
        // If workout running, create running object
        const cadence = +inputCadence.value;
        // Check if data is valid
        if (
          !validateNumber(distance, duration, cadence) &&
          !allPositives(distance, duration, cadence)
        ) {
          return alert("Inputs have to be positive numbers!");
        }
        workout = new Running([lat, lng], distance, duration, cadence);
        break;

      case "cycling":
        // If workout cycling, create cycling object
        const elevation = +inputElevation.value;
        if (
          !validateNumber(distance, duration, elevation) &&
          !allPositives(distance, duration)
        ) {
          return alert("Inputs have to be positive numbers!");
        }
        workout = new Cycling([lat, lng], distance, duration, elevation);
        // Check if data is valid
        break;
    }

    // Add new object to workout array
    this._workout.push(workout);
    // Render workout on map at market
    this._renderWorkoutMarker(workout);
    // Render workout on list
    this._renderWorkoutList(workout);
    // Hide form + clear input fields
    this._hideForm();
    this._resetForm();
    // Add data to localstorage
    this._setLocalStorage();
  }
  // Add Workout List item on the screen
  _renderWorkoutList(workout) {
    const html = `<li class="workout workout--${workout.constructor.name.toLowerCase()}" data-id="${
      workout.id
    }">
    <h2 class="workout__title">${workout.title}</h2>
    <div class="workout__details">
      <span class="workout__icon">${
        workout instanceof Running ? "🏃‍♂️" : "🚴‍♀️"
      }</span>
      <span class="workout__value">${workout.distance}</span>
      <span class="workout__unit">km</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">⏱</span>
      <span class="workout__value">${workout.duration}</span>
      <span class="workout__unit">min</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">⚡️</span>
      <span class="workout__value">${
        workout instanceof Running ? workout.cadence : workout.elevationGain
      }</span>
      <span class="workout__unit">min/km</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">${
        workout instanceof Running ? "🦶🏼" : "⛰"
      }</span>
      <span class="workout__value">${
        workout instanceof Running ? workout.pace : workout.speed
      }</span>
      <span class="workout__unit">${
        workout instanceof Running ? "spm" : "m"
      }</span>
    </div>
  </li>`;
    form.insertAdjacentHTML("afterend", html);
  }

  // Add Workout Marker on the screen
  _renderWorkoutMarker(workout) {
    L.marker(workout.coords)
      .addTo(this._map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.constructor.name.toLowerCase()}-popup`,
        })
      )
      .setPopupContent(
        `<b>${workout instanceof Running ? "🏃‍♂️" : "🚴‍♀️"} ${workout.title}</b>`
      )
      .openPopup();
  }
}
const app = new App();
