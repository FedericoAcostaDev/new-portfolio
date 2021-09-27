import React from 'react';

import {AppBar, Toolbar, IconButton, makeStyles} from '@material-ui/core/';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import { Box, ThemeProvider, useTheme, createTheme } from "@material-ui/core";
import theme from '../../theme';
import BasicMenu from './Menu';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const useStyles = makeStyles((theme) => ({
  menuIcon: {
    flexGrow: 1,
    justifyContent: 'left'
  }
}));

function NavBar() {
  const classes = useStyles();
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
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
          <IconButton  onClick={colorMode.toggleColorMode} color="secondary">
          {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton >
        </Toolbar>
      </AppBar>
    </Box>
    </ThemeProvider>
  );
}

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <NavBar />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}