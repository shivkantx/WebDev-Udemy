document.addEventListener("DOMContentLoaded", () => {
  const cityInput = document.getElementById("city-input");
  const getWeatherButton = document.getElementById("get-weather-btn");
  const weatherInfo = document.getElementById("weather-info");
  const cityNameDisplay = document.getElementById("city-name");
  const temperatureDisplay = document.getElementById("temperature");
  const descriptionDisplay = document.getElementById("description");
  const errorMessage = document.getElementById("error-message");

  const API_KEY = "f47e99179f3e7111ba5eed5ad7be769a";
  getWeatherButton.addEventListener("click", async () => {
    const city = cityInput.value.trim();
    if (!city) return;
    try {
      const weatherData = await fetchWeatherData(city);
      console.log(weatherData);
      displayWeatherData(weatherData);
    } catch (error) {
      showError();
    }
  });

  async function fetchWeatherData(city) {
    // gets the data
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
    const response = await fetch(url);
    console.log(typeof response);
    console.log("RESPONSE", response);

    if (!response.ok) {
      throw new Error("City Not Found!");
    }

    const data = await response.json();
    return data;
  }
  function displayWeatherData(data) {
    // display the data
    console.log(data);
    const { name, main, weather } = data;
    cityNameDisplay.textContent = `City : ${name}`;

    // unlock the dispaly
    weatherInfo.classList.remove("hidden");
    temperatureDisplay.textContent = `Temperature : ${main.temp}°C`;
    descriptionDisplay.textContent = `Weather : ${weather[0].description}`;

    errorMessage.classList.add("hidden");
  }
  function showError() {
    weatherInfo.classList.add("hidden");
    errorMessage.classList.remove("hidden");
  }
});
