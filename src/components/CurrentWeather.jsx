import React, { useState } from "react";
import WeatherDisplay from "./WeatherDisplay";
import { fetchWeather } from "../utils";

var cloudy = require("../images/cloudy.png");
var sun = require("../images/sun.svg");

const CurrentWeather = () => {
  const [city, setCity] = useState("miami");
  const [weather, setWeather] = useState({});

  const handleSubmit = e => {
    e.preventDefault();
    fetchWeather("miami").then(res => setWeather(res));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="city"
          type="text"
          placeholder="Search for Weather By City"
          value={city}
          onChange={e => setCity(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>

      <WeatherDisplay weather={weather} />
    </div>
  );
};

export default CurrentWeather;
