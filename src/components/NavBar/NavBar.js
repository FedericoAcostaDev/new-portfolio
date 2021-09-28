import React from 'react';

import {AppBar, Toolbar, IconButton, makeStyles} from '@material-ui/core/';

import { Box } from "@material-ui/core";
import BasicMenu from './Menu';


const useStyles = makeStyles((theme) => ({
  menuIcon: {
    flexGrow: 1,
    justifyContent: 'left'
  }
}));

function NavBar() {
  const classes = useStyles();
    return ( 
      <Box>
      <AppBar position="fixed" color='primary' >
        <Toolbar>
          <IconButton
          className={classes.menuIcon}
            size="small"   
          >
            <BasicMenu  />
          </IconButton >
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
