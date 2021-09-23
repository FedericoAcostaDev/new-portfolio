import React from "react";

import { IconButton, Grid, Typography } from "@material-ui/core";
import { makeStyles, ThemeProvider } from "@material-ui/core";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import theme from "../../theme";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "10vw",
  },
}));

const Footer = () => {
  const classes = useStyles();


  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        className={classes.container}
        direction="row"
        spacing={1}
        justifyContent="flex-start"
      >
        <Grid item xs>
          <Typography variant="body2" gutterBottom>
            Social
          </Typography>
        </Grid>
        <Grid item xs>
        <IconButton href="https://www.linkedin.com/in/fede-acosta-b11a22211/">
          <LinkedInIcon color="action"/>
          </IconButton>
        </Grid>
        <Grid item xs>
        <IconButton href="https://github.com/FedericoAcostaDev">
          <GitHubIcon color="action"/>
          </IconButton>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Footer;
