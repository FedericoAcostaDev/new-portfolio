import React from "react";

import { Grid, Typography } from "@material-ui/core";
// import logo from '../../Assets/Logo.png';
import useStyles from './Styles';




const Footer = () => {
  const classes = useStyles();

    return (
        
<Grid container className={classes.container}  direction="row" spacing={1} justifyContent="flex-start">

  <Grid item xs align='center' >

         <Typography variant='body1' align="left" gutterBottom >
         Social
         </Typography>
  </Grid>
  <Grid item xs align='center'>
  
  </Grid>
  </Grid>      
  )
};

export default Footer;