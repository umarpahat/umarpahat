import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

function valuetext(value) {
  $("#total-label").text(value);
  $("#total-amount").text(value);
  var amount= `${value}`

  return `${value}`;
  
}



export  function AmountSlider() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Slider
        defaultValue={0}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-always"
        step={500}
        min={500}
        max={200000}
        valueLabelDisplay="on"
      />
    </div>
  );
}
function valuetext2(value) {
  $("#duration-label").text(value);
  return `${value}`;

}

export  function TimeSlider() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Slider
        defaultValue={0}
        getAriaValueText={valuetext2}
        aria-labelledby="discrete-slider-always"
        step={1}
        min={2}
        max={24}
        valueLabelDisplay="on"
      />
    </div>
  );
}