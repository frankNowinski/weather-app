import React, { useState } from "react";
import "../App.css";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import CurrentWeather from "./CurrentWeather";
import FiveDayWeather from "./FiveDayWeather";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import SearchByCity from "./SearchByCity";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  radio: {
    flexDirection: "row"
  }
}));

const App = () => {
  const classes = useStyles();
  const [view, setView] = useState("current-weather");
  const [currentWeather, setCurrentWeather] = useState({});
  const [fiveDayWeather, setFiveDayWeather] = useState({});
  const [unit, setUnit] = useState("imperial");

  const currentWeatherView = view === "current-weather";

  return (
    <Box p={3}>
      <Typography variant="h3">Weather</Typography>

      <Grid>
        <FormControl component="fieldset">
          <RadioGroup
            className={classes.radio}
            aria-label="weather"
            name="weather"
            value={view}
            onChange={e => setView(e.target.value)}
          >
            <FormControlLabel
              value="current-weather"
              control={<Radio />}
              label="Current Weather"
            />
            <FormControlLabel
              value="five-day-weather"
              control={<Radio />}
              label="Five Day Weather"
            />
          </RadioGroup>
        </FormControl>
      </Grid>

      <FormControl component="fieldset">
        <RadioGroup
          className={classes.radio}
          name="unit"
          value={unit}
          onChange={e => setUnit(e.target.value)}
        >
          <FormControlLabel
            value="imperial"
            control={<Radio />}
            label="Fahrenheit"
          />
          <FormControlLabel value="metric" control={<Radio />} label="Metric" />
        </RadioGroup>
      </FormControl>

      <SearchByCity
        unit={unit}
        setUnit={setUnit}
        setCurrentWeather={setCurrentWeather}
        setFiveDayWeather={setFiveDayWeather}
      />
      {currentWeatherView ? (
        <CurrentWeather weather={currentWeather} unit={unit} />
      ) : (
        <FiveDayWeather weather={fiveDayWeather} unit={unit} />
      )}
    </Box>
  );
};

export default App;
