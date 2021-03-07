import React, { useState } from "react";
import "../App.css";
import CurrentWeather from "./CurrentWeather";
import FiveDayWeather from "./FiveDayWeather";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const App = () => {
  const [view, setView] = useState("current-weather");

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

      {view === "current-weather" ? <CurrentWeather /> : <FiveDayWeather />}
    </Box>
  );
};

export default App;
