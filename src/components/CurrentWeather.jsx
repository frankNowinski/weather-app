import React, { useState } from "react";
import WeatherCard from "./WeatherCard";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { fetchWeather } from "../utils";

const CurrentWeather = () => {
  const [city, setCity] = useState("miami");
  const [weather, setWeather] = useState({});

  const handleSubmit = e => {
    fetchWeather("new york").then(res => setWeather(res));
  };

  return (
    <div>
      <TextField
        name="city"
        placeholder="Search for Weather By City"
        value={city}
        onChange={e => setCity(e.target.value)}
      />

      <Button color="primary" variant="contained" onClick={handleSubmit}>
        Submit
      </Button>

      {Object.keys(weather).length > 0 && <WeatherCard weather={weather} />}
    </div>
  );
};

export default CurrentWeather;
