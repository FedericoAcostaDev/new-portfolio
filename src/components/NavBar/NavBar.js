import React from 'react';

import {AppBar, Toolbar, IconButton, makeStyles} from '@material-ui/core/';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

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
      <Box>
      <AppBar position="fixed" color='primary' >
        <Toolbar>
          <IconButton
          className={classes.menuIcon}
            size="small"   
          >
            <BasicMenu  />
          </IconButton >
          <IconButton  color="secondary">
          <Brightness4Icon />
          </IconButton >
        </Toolbar>
      </AppBar>
    </Box>
    </ThemeProvider>
  );
}

    export default NavBar;