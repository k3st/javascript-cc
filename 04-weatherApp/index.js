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
    const weather = await response.json();
    // console.log(weather); // CHECK JSON

    return weather;
  } catch (err) {
    console.err("ERROR", err);
    console.log("error");
    container.style.height = "400px";
    weatherBox.style.display = "none";
    weatherDetails.style.display = "none";
    error404.style.display = "block";
    error404.classList.add("fadeIn");
    return null;
  }
}

function error() {
  console.log("error");
  container.style.height = "400px";
  weatherBox.style.display = "none";
  weatherDetails.style.display = "none";
  error404.style.display = "block";
  error404.classList.add("fadeIn");
  return;
}
search.addEventListener("click", () => {
  const city = document.querySelector(".search-box input").value;
  if (city === "") return;

  fetchWeather(city).then((weatherData) => {
    const location = weatherData.location.name;
    console.log(location);
  });

  //   const APIKey = "adf637bee2394fe3b39165254242009";
  //   let APIUrl = "http://api.weatherapi.com/v1";

  //   const APIfetch = APIUrl + "/current.json?key=" + APIKey + "&q=" + city;

  //   fetch(APIfetch).then((response) => {
  //     response.json();
  //   });

  //   fetch(`apiURL`)
  //     .then((response) => response.json()).then((json))
  // .then((json) => {
  //   if (json.code === "404") {
  //     container.style.height = "400px";
  //     weatherBox.style.display = "none";
  //     weatherDetails.style.display = "none";
  //     error404.style.display = "block";
  //     error404.classList.add("fadeIn");
  //     return;
  //   }

  //   error404.style.display = "none";
  //   error404.classList.remove("fadeIn");

  //   const image = document.querySelector(".weather-box img");
  //   const temperature = document.querySelector(".weather-box .temperature");
  //   const description = document.querySelector(".weather-box .description");
  //   const humidity = document.querySelector(".weather-box .humidity span");
  //   const wind = document.querySelector(".weatherbox .wind span");

  //   switch (json.weather[0].main) {
  //     case "Clear":
  //       image.src = "images/clear.png";
  //   }
  // });
});
