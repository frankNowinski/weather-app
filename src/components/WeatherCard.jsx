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

const WeatherCard = ({ weather }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        classes={classes.avatar}
        avatar={`Temp: ${weather.main?.temp}`}
        title={weather.name}
      />
      <CardMedia className={classes.media} image={cloudy} />
      <CardContent>
        <Typography>{weather.weather[0].main}</Typography>
        <Typography>{weather.weather[0].description}</Typography>
        <Typography>Feels like: {weather.main.feels_like}</Typography>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
