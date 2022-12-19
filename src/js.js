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
function updateFeatures(response) {
  console.log(response.data);
  var temprature = Math.round(response.data.main.temp);
  let h2 = document.querySelector("#temprature");
  h2.innerHTML = `${temprature}`;

  let humidityValue = Math.round(response.data.main.humidity);
  let humidityTag = document.querySelector("#humidityId");
  humidityTag.innerHTML = humidityValue;

  let windSpeed = response.data.wind.speed;
  let windSpeedTag = document.querySelector("#windId");
  windSpeedTag.innerHTML = windSpeed;
  cityName = response.data.name;
  let userCity = document.querySelector("#city-name");
  userCity.innerHTML = cityName;

  //change degree from Celsius to fahrenheit

  function changetoCelsius() {
    h2.innerHTML = `${temprature}`;
  }

  function changetoFahrenheit() {
    h2.innerHTML = Math.round((temprature * 9) / 5 + 32);
  }

  let Celsius = document.querySelector(".span-tag-celc");
  Celsius.addEventListener("click", changetoCelsius);

  let fahrenheit = document.querySelector(".span-tag-far");
  fahrenheit.addEventListener("click", changetoFahrenheit);
}

// // current buttn

// function updateFeatures(response) {
//   cityName = response.data.name;
//   let userCity = document.querySelector("#city-name");
//   userCity.innerHTML = cityName;
//   let humidityValue = Math.round(response.data.main.humidity);
//   let humidityTag = document.querySelector("#humidityId");
//   humidityTag.innerHTML = humidityValue;
//   let windSpeed = response.data.wind.speed;
//   let windSpeedTag = document.querySelector("#windId");
//   windSpeedTag.innerHTML = windSpeed;
//   var temprature = Math.round(response.data.main.temp);
//   let h2 = document.querySelector("#temprature");
//   h2.innerHTML = `${temprature}`;
// }
function showPosition(position) {
  var lat = position.coords.latitude;
  var lon = position.coords.longitude;
  let apiKey = "d712b24c54cf313c331254715f8095f8";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&lon=${lon}&lat=${lat}`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(updateFeatures);
}

function getCurrentLoc() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

let currentbtn = document.querySelector("#current-btn");
currentbtn.addEventListener("click", getCurrentLoc);

function printCityName(event) {
  event.preventDefault();
  let cityNames = document.querySelector("#get-cityname-input");
  let cityName = cityNames.value;
  let userCity = document.querySelector("#city-name");
  userCity.innerHTML = cityName;

  let apiKey = "d712b24c54cf313c331254715f8095f8";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(updateFeatures);
}

let addEventForm = document.querySelector("#get-cityname");
addEventForm.addEventListener("submit", printCityName);
