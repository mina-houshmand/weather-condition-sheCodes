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

let city = prompt("Enter a acity");
cityName = city.toLowerCase().trim();
switch (cityName) {
  case "paris":
    alert(
      `It is currently ${Math.round(
        weather.paris.temp
      )}°C in ${cityName} with a humidity of ${weather.paris.humidity}%`
    );
    break;
  case "tokyo":
    alert(
      `It is currently ${Math.round(weather.tokyo.temp)}°C in ${cityName} with a humidity of ${weather.tokyo.humidity}%`
    );
    break;
  case "lisbon":
    alert(
      `It is currently ${Math.round(
        weather.lisbon.temp
      )}°C in ${cityName} with a humidity of ${weather.lisbon.humidity}%`
    );
    break;
  case "san francisco":
    alert(
      `It is currently ${Math.round(weather["san francisco"].temp)}°C in ${cityName} with a humidity of ${weather["san francisco"].humidity}%`
    );
    break;
  case "oslo":
    alert(
      `It is currently ${Math.round(weather.oslo.temp)}°C in ${cityName} with a humidity of ${weather.oslo.humidity}%`
    );
    break;

  default:
    alert(
      "Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+sydney"
    );
}
