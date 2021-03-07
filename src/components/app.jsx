import React, { useState } from "react";
import "../App.css";
import Box from "@material-ui/core/Box";
import CurrentWeather from "./CurrentWeather";
import FiveDayWeather from "./FiveDayWeather";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import SearchByCity from "./SearchByCity";

const App = () => {
  const [view, setView] = useState("five-day-weather");
  const [currentWeather, setCurrentWeather] = useState({});
  const [fiveDayWeather, setFiveDayWeather] = useState({});

  const currentWeatherView = view === "current-weather";

  return (
    <Box p={3}>
      <FormControl component="fieldset">
        <FormLabel component="legend">Weather</FormLabel>
        <RadioGroup
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

      <SearchByCity
        setCurrentWeather={setCurrentWeather}
        setFiveDayWeather={setFiveDayWeather}
      />

      {currentWeatherView ? (
        <CurrentWeather weather={currentWeather} />
      ) : (
        <FiveDayWeather weather={fiveDayWeather} />
      )}
    </Box>
  );
};

export default App;
