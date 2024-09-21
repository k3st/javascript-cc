const container = document.querySelector(".container");
const search = document.querySelector(".search-box button");
const weatherBox = document.querySelector(".weather-box");
const weatherDetails = document.querySelector(".weather-details");
const error404 = document.querySelector(".not-found");

async function fetchWeather(city) {
  const APIKey = "?key=" + "adf637bee2394fe3b39165254242009";

  const APIUrl = "http://api.weatherapi.com/v1";
  const type = "/current.json";
  const location = "&q=" + city;

  const APIfetch = APIUrl + type + APIKey + location;

  try {
    const response = await fetch(APIfetch);
    if (!response.ok) {
      // Handle bad requests or other status errors here
      if (response.status === 400) console.log("Bad Request 400");
      errorHandler();
      return null;
    }
    const weather = await response.json();
    return weather;
  } catch (err) {
    console.err("ERROR", err);
    return null;
  }
}

function errorHandler() {
  console.log("errorHandler");
  container.style.height = "400px";
  weatherBox.style.display = "none";
  weatherDetails.style.display = "none";
  error404.style.display = "block";
  error404.classList.add("fadeIn");
  return;
}

function showWeather(data) {
  console.log(data);
  error404.style.display = "none";
  error404.classList.remove("fadeIn");

  const image = document.querySelector(".weather-box img");
  const temperature = document.querySelector(".weather-box .temperature");
  const description = document.querySelector(".weather-box .description");
  const humidity = document.querySelector(".weather-details .humidity span");
  const wind = document.querySelector(".weather-details .wind span");

  const condition = data.current.condition.text.toLowerCase();

  if (condition.includes("cloudy") || condition.includes("overcast")) {
    image.src = "images/cloud.png";
  } else if (condition.includes("fog") || condition.includes("mist")) {
    image.src = "images/mist.png";
  } else if (
    condition.includes("rain") ||
    condition.includes("drizzle") ||
    condition.includes("thundery")
  ) {
    image.src = "images/rain.png";
  } else if (condition.includes("snow") || condition.includes("blizzard")) {
    image.src = "images/snow.png";
  } else {
    image.src = "images/clear.png"; // Fallback image for other conditions
  }

  temperature.innerHTML = ` ${parseInt(data.current.temp_c)}°C`;
  description.innerHTML = ` ${data.current.condition.text}`;
  humidity.innerHTML = ` ${data.current.humidity}%`;
  wind.innerHTML = ` ${parseInt(data.current.wind_kph)}Km/h`;

  weatherBox.style.display = " ";
  weatherDetails.style.display = "";
  weatherBox.classList.add("fadeIn");
  weatherDetails.classList.add("fadeIn");
  container.style.height = "590px";
}

search.addEventListener("click", () => {
  const city = document.querySelector(".search-box input").value;
  if (city === "") return;
  try {
    fetchWeather(city).then((weatherData) => {
      if (weatherData) showWeather(weatherData);
    });
  } catch (err) {
    console.err("ERROR - #Ln61", err);
  }
});
