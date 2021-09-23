import React from "react";

import { Box, Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  container: {
      padding: '10vw',
  },

}));


const Footer = () => {
  const classes = useStyles();

    return (
        
<Grid container className={classes.container}  direction="row" spacing={1} justifyContent="flex-start">

  <Grid item xs align='center' direction='row' >
         <Typography variant='body2' gutterBottom >
         Social
         </Typography>
  </Grid>
  <Grid item xs align='center' direction='row' >
         <Typography variant='body2' gutterBottom >
         LinkedIn
         </Typography>
  </Grid>
  <Grid item xs align='center' direction='row' >
         <Typography variant='body2' gutterBottom >
         Github
         </Typography>
  </Grid>
  </Grid>      
  )
};

export default Footer;