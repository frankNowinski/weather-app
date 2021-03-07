import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import { fetchWeather } from "../utils";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  input: {
    width: theme.spacing(30)
  },
  button: {
    marginLeft: theme.spacing(3)
  }
}));

const SearchByCity = ({
  unit,
  setUnit,
  setCurrentWeather,
  setFiveDayWeather
}) => {
  const classes = useStyles();
  const [city, setCity] = useState("");

  const handleSubmit = () => {
    getWeather();
  };

  const getWeather = () => {
    if (city.length > 1) {
      fetchWeather(city, unit)
        .then(([currentWeather, fiveDayWeather]) => {
          setCurrentWeather(currentWeather);
          setFiveDayWeather(fiveDayWeather);
        })
        .catch(error => alert("Unable to fetch weather"));
    }
  };

  useEffect(() => {
    getWeather();
  }, [unit]);

  return (
    <Box p={3}>
      <TextField
        className={classes.input}
        name="city"
        placeholder="Search for Weather By City"
        value={city}
        onChange={e => setCity(e.target.value)}
      />

      <Button
        className={classes.button}
        color="primary"
        variant="contained"
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </Box>
  );
};

export default SearchByCity;
