import React from 'react';

import {AppBar, Toolbar, IconButton} from '@material-ui/core/';


import { Box,Switch, ThemeProvider } from "@material-ui/core";
import theme from '../../theme';
import BasicMenu from './Menu';



const NavBar = () => {

    return (
      <ThemeProvider theme={theme}>  
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="medium"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <BasicMenu  />
          </IconButton>
          <Switch sx={{ flexGrow: 1, alignSelf: 'flex-end' }}/>
        </Toolbar>
      </AppBar>
    </Box>
    </ThemeProvider>
  );
}

    export default NavBar;