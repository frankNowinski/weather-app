import React from "react";
import WeatherCard from "./WeatherCard";
import Grid from "@material-ui/core/Grid";

const FiveDayWeather = ({ weather }) => {
  const hasWeather = Object.keys(weather).length > 0;

  return (
    <Grid container alignItems="center" justify="center">
      {hasWeather &&
        weather.list.slice(0, 5).map(list => <WeatherCard weather={list} />)}
    </Grid>
  );
};

export default FiveDayWeather;
