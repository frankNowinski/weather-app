export const fetchWeather = async (cityName, unit) => {
  const API_KEY = "e6c7e0aa7a259c2ebbec7a1ceadd1879"; // Would store API_KEY in .env file
  const BASE_URL = "https://api.openweathermap.org/data/2.5/";
  const CURRENT_WEATHER_ENDPOINT = "weather";
  const FIVE_DAY_WEATHER_ENDPOINT = "forecast";

  const [currentWeatherResponse, fiveDayWeatherResponse] = await Promise.all([
    fetch(
      `${BASE_URL}${CURRENT_WEATHER_ENDPOINT}?q=${cityName}&appid=${API_KEY}&units=${unit}`
    ),
    fetch(
      `${BASE_URL}${FIVE_DAY_WEATHER_ENDPOINT}?q=${cityName}&appid=${API_KEY}&units=${unit}`
    )
  ]);

  const currentWeather = await currentWeatherResponse.json();
  const fiveDayWeather = await fiveDayWeatherResponse.json();

  return [currentWeather, fiveDayWeather];
};
