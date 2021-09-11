import React from 'react';

import {AppBar, Button, Toolbar, IconButton, Typography, makeStyles} from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';
import './Styles.js';

const NavBar = () => {
    return (
      <div className={makeStyles.root}>
        <AppBar position="static">
    <Toolbar>
      <IconButton edge="start" className={makeStyles.menuButton}  color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" className={makeStyles.title}>
        Federico Acosta
      </Typography>
      <Button color="inherit">About</Button>
      <Button color="inherit">portfolio</Button>
      <Button color="inherit">works</Button>
      <Button color="inherit">Contact</Button>
    </Toolbar>
  </AppBar>
  </div>
    )
    }

    export default NavBar;