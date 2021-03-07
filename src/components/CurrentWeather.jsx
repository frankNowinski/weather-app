import React from "react";
import Grid from "@material-ui/core/Grid";
import WeatherCard from "./WeatherCard";

const CurrentWeather = ({ weather }) => {
  const hasWeather = Object.keys(weather).length > 0;

  return (
    <div>
      <Grid container justify="center">
        {hasWeather && <WeatherCard weather={weather} />}
      </Grid>
    </div>
  );
};

export default CurrentWeather;
