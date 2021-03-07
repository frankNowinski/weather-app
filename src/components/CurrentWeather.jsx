import React, { useState } from "react";
import { fetchWeather } from "../utils";

const CurrentWeather = () => {
  const [weather, setWeather] = useState({});

  //const getWeather = fetchWeather("Miami").then(res => setWeather(res));

  return (
    <div>
      <input
        type="text"
        placeholder="Search for Weather By City"
        onClick={handleClick}
      />
    </div>
  );
};

export default CurrentWeather;
