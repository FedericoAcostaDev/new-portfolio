import React from 'react';

import {AppBar, Toolbar, IconButton, makeStyles} from '@material-ui/core/';


import { Box,Switch, ThemeProvider } from "@material-ui/core";
import theme from '../../theme';
import BasicMenu from './Menu';

const useStyles = makeStyles((theme) => ({
  menuIcon: {
    flexGrow: 1,
    justifyContent: 'left'
  }
}));

const NavBar = () => {
  const classes = useStyles();
    return (
      <ThemeProvider theme={theme}>  
      <Box sx>
      <AppBar position="fixed" >
        <Toolbar>
          <IconButton
          className={classes.menuIcon}
            size="small"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, }}
          >
            <BasicMenu  />
          </IconButton>
          <Switch className={classes.switch}/>
        </Toolbar>
      </AppBar>
    </Box>
    </ThemeProvider>
  );
}

    export default NavBar;