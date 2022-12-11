let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
};

// let city = prompt("Enter a acity");
// cityName = city.toLowerCase().trim();

// if (cityName) {
//   alert(
//     `It is currently ${Math.round(
//       weather[cityName].temp
//     )}°C in ${cityName} with a humidity of ${weather[cityName].humidity}%`
//   );
// } else {
//   alert(
//     "Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+sydney"
//   );
// }

//adding current date to app

let date = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = date.getDay();
let hour = date.getHours();
let min = date.getMinutes();
console.log(days[day]);
let currentDate = document.querySelector("#current-date");
currentDate.innerHTML = `${days[day]} ${hour}:${min}`;

//addding input value to city-name

function printCityName(event) {
  event.preventDefault();
  let cityNames = document.querySelector("#get-cityname-input");

  let userCity = document.querySelector("#city-name");
  userCity.innerHTML = cityNames.value;
}

let addEventForm = document.querySelector("#get-cityname");
addEventForm.addEventListener("submit", printCityName);

//change degree from Celsius to fahrenheit
function changetoCelsius() {
  let temperature = document.querySelector("#temprature");
  temperature.innerHTML = "10";
}

function changetoFahrenheit() {
  let temperature = document.querySelector("#temprature");
  temperature.innerHTML = "50";
}

let Celsius = document.querySelector(".span-tag-celc");
Celsius.addEventListener("click", changetoCelsius);

let fahrenheit = document.querySelector(".span-tag-far");
fahrenheit.addEventListener("click", changetoFahrenheit);
