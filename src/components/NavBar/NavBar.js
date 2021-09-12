import React from 'react';

import {AppBar, Toolbar, IconButton, Typography,} from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './Styles';
import logo from '../../Assets/Logo.png';

const NavBar = () => {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <AppBar position="static">
    <Toolbar>
      
      <Typography variant="h6" className={classes.title}>
        <img src= {logo} alt='' height='50em'/>
      </Typography>
      <IconButton edge="start" className={classes.menuButton}  color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
     
    </Toolbar>
  </AppBar>
  </div>
    )
    }

    export default NavBar;