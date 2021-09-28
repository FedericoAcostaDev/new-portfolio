import React from "react";

import { IconButton, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { PropTypes } from 'prop-types';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const useStyles = makeStyles(() => ({
  container: {
    padding: "10vw",
    //backgroundColor:'#F5F5F6',
  },
  title: {
    marginTop: '10px',
  },
}));

const Footer = ({props}) => {
  const classes = useStyles();


  return (
      <Grid
        container
        className={classes.container}
        direction="row"
        spacing={1}
        justifyContent="flex-start"
      >
        <Grid item xs className={classes.title}>
          <Typography variant="body2" gutterBottom>
            Social
          </Typography>
        </Grid>
        <Grid item xs>
        <IconButton color="inherit"
        href="https://www.linkedin.com/in/fede-acosta-b11a22211/">
          <LinkedInIcon/>
          </IconButton>
        </Grid>
        <Grid item xs>
        <IconButton color="inherit" 
        href="https://github.com/FedericoAcostaDev">
          <GitHubIcon />
          </IconButton>
        </Grid>
      </Grid>
  );
};

Footer.propTypes = {
  props: PropTypes.string
};

export default Footer;
