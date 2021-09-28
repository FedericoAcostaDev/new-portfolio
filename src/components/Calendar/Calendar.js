import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { PropTypes } from 'prop-types';
import { Button, Typography, Divider, Grid } from "@material-ui/core";


const useStyles = makeStyles(() => ({
  grid: {
    width: "100%",
  },
  button: {
    margin: "4vw",
    borderRadius: '32px',
  },
}));

const DatePicker = (props) => {
  const classes = useStyles();

  return (
      <div id="contact">
        <Typography variant="h6" align="center">
          Get in contact!
        </Typography>
        <Divider variant="middle" />
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Button
            variant="contained"
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
  );
};
DatePicker.propTypes = {
  props: PropTypes.string
};

export default DatePicker;
