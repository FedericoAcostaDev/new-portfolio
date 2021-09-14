import React from "react";
import { Grid, Typography } from "@material-ui/core";


import logo from '../../Assets/Logo.png';
import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  container: {
      padding: '10vw',
      background: '#9fa8da',
  },

}));


const Header = () => {
  const classes = useStyles();

    return (
        
<Grid container className={classes.container}  direction="row" spacing={1} justifyContent="flex-start">

  <Grid item xs align='center' >
  <Typography variant='h6' align="left" gutterBottom >
         A Remote Full-Stack web developer with an art & design background.
         </Typography>
         <Typography variant='body1' align="left" gutterBottom >
         Welcome to my portfolio!
         </Typography>
  </Grid>
  <Grid item xs align='center'>
  <img src= {logo} alt='' height='80vm'/>
  </Grid>
  </Grid>      
  )
};

export default Header;