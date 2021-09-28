import React from "react";
import { Grid, Typography } from "@material-ui/core";

import logo from "../../Assets/Logo.png";
import { makeStyles, ThemeProvider } from "@material-ui/core";
import theme from "../../theme";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "10vw",
    paddingTop: "80px",
    wrap: 'wrap',
  },
  logo: {
    maxWidth: '400px',
  },
  title: {
    maxWidth: '400px',
  }

}));

const Header = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Grid 
        container
        className={classes.container}
        justifyContent='center'
        direction="row" 
        spacing={3}

        
      >
        
        <Grid xs={4} align='center' className={classes.logo} item sx={{ flexGrow: 1 }} >
          <img src={logo}  alt="" height="80vm" />
        </Grid>

        <Grid className={classes.title} align='left' item sx={{ flexGrow: 1 }} >
          <Typography variant="h6" gutterBottom>
            I am Federico Acosta, a Remote Full-Stack developer with an art
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
