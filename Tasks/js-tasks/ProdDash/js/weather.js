const temperatureEl = document.getElementById("temperature");
const humidityEl = document.getElementById("humidity");
const windEl = document.getElementById("wind");
const pressureEl = document.getElementById("pressure");
const visibilityEl = document.getElementById("visibility");
const weatherCondition = document.getElementById("weather-condition");
const weatherImage = document.getElementById("w-image");
const feelsLikeEl = document.getElementById("feels-like");
const locationEl = document.getElementById("city");
const hero = document.getElementById("hero");

function getCurrentLocation() {
  if (!navigator.geolocation) {
    alert("Geolocation is not supported");
  }
  navigator.geolocation.getCurrentPosition(success, error);
}

function success(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  console.log(position);

  getWeather(latitude, longitude);
  getLocationName(latitude, longitude);
}

function error() {
  alert("Location Permission Denide");
}

getCurrentLocation();

const weatherMap = {
  0: {
    text: "Clear Sky",
    icon: "sunny.png",
    background: "clear",
  },

  1: {
    text: "Mainly Clear",
    icon: "sunny.png",
    background: "clear",
  },

  2: {
    text: "Partly Cloudy",
    icon: "cloudy.webp",
    background: "cloudy",
  },

  3: {
    text: "Cloudy",
    icon: "cloudy.webp",
    background: "cloudy",
  },

  45: {
    text: "Fog",
    icon: "fog.png",
    background: "cloudy",
  },

  48: {
    text: "Fog",
    icon: "fog.png",
    background: "cloudy",
  },

  51: {
    text: "Light Drizzle",
    icon: "rain.webp",
    background: "rain",
  },

  53: {
    text: "Drizzle",
    icon: "rain.webp",
    background: "rain",
  },

  55: {
    text: "Heavy Drizzle",
    icon: "rain.webp",
    background: "rain",
  },

  61: {
    text: "Rain",
    icon: "rain.webp",
    background: "rain",
  },

  63: {
    text: "Heavy Rain",
    icon: "rain.webp",
    background: "rain",
  },

  65: {
    text: "Very Heavy Rain",
    icon: "rain.webp",
    background: "rain",
  },

  71: {
    text: "Snow",
    icon: "snow.png",
    background: "snow",
  },

  96: {
    text: "Thunderstorm",
    icon: "storm.png",
    background: "storm",
  },
};

async function getLocationName(latitude, longitude) {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`,
    );

    const data = await response.json();

    const city =
      data.address.city ||
      data.address.town ||
      data.address.village ||
      data.address.county;

    const state = data.address.state;

    locationEl.textContent = `📍 ${city}, ${state}`;
  } catch (error) {
    console.log(error);
  }
}

async function getWeather(latitude, longitude) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,wind_speed_10m,surface_pressure,visibility`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);

    const temperature = data.current.temperature_2m;
    const humidity = data.current.relative_humidity_2m;
    const windSpeed = data.current.wind_speed_10m;
    const weatherCode = data.current.weather_code;
    const pressure = data.current.surface_pressure;
    const visibility = data.current.visibility;
    const weather = weatherMap[weatherCode];
    const feelsLike = data.current.apparent_temperature;

    weatherCondition.textContent = weather.text;
    weatherImage.src = `./assets/images/${weather.icon}`;

    temperatureEl.textContent = `${Math.floor(temperature)}°C`;
    humidityEl.textContent = `${humidity}%`;
    windEl.textContent = `${windSpeed} km/h`;
    pressureEl.textContent = `${pressure} hPa`;
    visibilityEl.textContent = `${visibility / 1000} km`;
    feelsLikeEl.textContent = `${Math.floor(feelsLike)}°C`;

  } catch (error) {
    console.log(error);
  }
}
getWeather();
