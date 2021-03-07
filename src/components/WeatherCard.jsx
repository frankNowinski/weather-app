import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

var cloudy = require("../images/cloudy.png");
var rainy = require("../images/rainy.png");
var sunny = require("../images/sunny.png");

const useStyles = makeStyles(theme => ({
  root: {
    width: 300,
    marginRight: theme.spacing(2)
  },
  media: {
    height: "80px",
    paddingTop: "75%"
  }
}));

const weatherImages = {
  Rain: rainy,
  Clouds: cloudy,
  Clear: sunny
};

const WeatherCard = ({ weather, unit }) => {
  const classes = useStyles();
  const { main, description, feels_like } = weather.weather[0];
  const weatherImage = weatherImages[main];

  const unitChar = unit === "imperial" ? "F" : "C";
  const degrees = `${"\u00b0"}${unitChar}`;
  const date = new Date(weather.dt * 1000);

  return (
    <Card className={classes.root}>
      <CardHeader
        classes={classes.avatar}
        avatar={`Temp: ${weather.main.temp} ${degrees}`}
        title={date.toUTCString()}
      />
      <CardMedia className={classes.media} image={weatherImage} />
      <CardContent>
        <Typography>Forecast: {main}</Typography>
        <Typography>Description: {description}</Typography>
        <Typography>
          Feels like: {weather.main.feels_like} {degrees}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
