import React, { useState } from "react";
import "../App.css";
import CurrentWeather from "./CurrentWeather";

const App = () => {
  const [view, setView] = useState("currentWeather");

  return (
    <div>
      Weather
      {view === "currentWeather" && <CurrentWeather />}
    </div>
  );
};

export default App;
