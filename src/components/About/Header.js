import React from "react";
import { Grid, Typography } from "@material-ui/core";

import logo from "../../Assets/Logo.png";
import { makeStyles, ThemeProvider } from "@material-ui/core";
import theme from "../../theme";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "10vw",
    paddingTop: "80px",
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Grid 
        container
        className={classes.container}
        direction="row" spacing={3} columns={{ xs: 2}}
      >
        
        <Grid item xs={6} >
          <img src={logo} alt="" height="80vm" />
        </Grid>

        <Grid item xs={6}  >
          <Typography variant="h6" gutterBottom>
            I am Federico Acosta, a Remote Full-Stack web developer with an art
            & design background.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Welcome to my portfolio!
          </Typography>
        </Grid>
        
      </Grid>
    </ThemeProvider>
  );
};

export default Header;
