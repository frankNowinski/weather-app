export const fetchWeather = async cityName => {
  const API_KEY = "e6c7e0aa7a259c2ebbec7a1ceadd1879"; // Would store API_KEY in .env file
  const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?q=";

  const response = await fetch(`${BASE_URL}${cityName}&appid=${API_KEY}`);
  const weather = await response.json();

  return weather;
};
