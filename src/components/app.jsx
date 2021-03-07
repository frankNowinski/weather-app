import React, { useState } from "react";
import { ReactComponent as Logo } from "../images/sun.png";
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
