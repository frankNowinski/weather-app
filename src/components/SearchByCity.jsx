import React, { useState } from "react";
import "../App.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { fetchWeather } from "../utils";
import Box from "@material-ui/core/Box";

const SearchByCity = ({ setCurrentWeather, setFiveDayWeather }) => {
  const [city, setCity] = useState("miami");

  const handleSubmit = () => {
    fetchWeather("new york")
      .then(([currentWeather, fiveDayWeather]) => {
        setCurrentWeather(currentWeather);
        setFiveDayWeather(fiveDayWeather);
      })
      .catch(error => alert("Unable to fetch weather"));
  };

  return (
    <Box p={3}>
      <TextField
        name="city"
        placeholder="Search for Weather By City"
        value={city}
        onChange={e => setCity(e.target.value)}
      />

      <Button color="primary" variant="contained" onClick={handleSubmit}>
        Submit
      </Button>
    </Box>
  );
};

export default SearchByCity;
