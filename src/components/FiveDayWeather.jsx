import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const FiveDayWeather = () => {
  const [view, setView] = useState("current-weather");
  const [value, setValue] = React.useState("female");

  const handleChange = event => {
    setValue(event.target.value);
  };

  return <Box p={3}>Hello</Box>;
};

export default FiveDayWeather;
