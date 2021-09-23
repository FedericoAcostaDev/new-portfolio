import React from "react";

import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import { Button, Typography, Divider, Grid } from "@material-ui/core";
import theme from "../../theme";

const useStyles = makeStyles((theme) => ({
  grid: {
    width: '100%',
    //padding: '3vw',
  },
  button: {
    backgroundColor: "#FFA726",
    margin: "4vw",
  },
}));

const DatePicker = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Divider variant="middle" />
        <Typography variant="h6" align="center">
          Get in contact!
        </Typography>
        <Divider variant="middle" />
        
          <Button
            className={classes.button}
            align="center"
            href="https://calendly.com/meetingwithfede/meet"
            color="inherit"
          >
            Schedule a meeting
          </Button>
        
      </div>
    </ThemeProvider>
  );
};

export default DatePicker;
