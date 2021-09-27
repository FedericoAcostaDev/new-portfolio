import React from "react";

import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import { Button, Typography, Divider, Grid } from "@material-ui/core";
import theme from "../../theme";


const useStyles = makeStyles((theme) => ({
  grid: {
    width: "100%",
    //padding: '3vw',
  },
  button: {
    margin: "4vw",
  },
}));

const DatePicker = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div id='contact'>
        <Typography variant="h6" align="center">
          Get in contact!
        </Typography>
        <Divider variant="middle" />
        <Grid container  direction='column' alignItems='center' justifyContent='center'>
        <Button
        variant='contained'
        size="small"
        
          className={classes.button}
          align="center"
          href="https://calendly.com/meetingwithfede/meet"
          color="secondary"
        >
          Schedule a meeting
        </Button>
        </Grid>
      </div>
    </ThemeProvider>
  );
};

export default DatePicker;
