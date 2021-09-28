import React from 'react';
import { createTheme, ThemeProvider} from '@material-ui/core/styles';

const theme = createTheme({
    palette: {
      type: 'light',

      primary: {
        light: '#c1d5e0',
        main: '#90a4ae',
        dark: '#62757f',
      },
      secondary: {
        light: '#ffe97d',
        main: '#ffb74d',
        dark: '#c88719',
      },
    error: {
        main: '#f44336',
      },
      warning: {
        main: '#ff9800',
      },
      info: {
        main: '#2196f3',
      },
      success: {
        main: '#4caf50',
      },
    },
  });

 const Theme = (props) => {
   const {children} = props;
   return <ThemeProvider theme={theme}>
     {children}
   </ThemeProvider>
 }

 export const withTheme =(Component) => {
   return (props) => {
     return (
       <Theme>
         <Component {...props} />
       </Theme>
     )
   };
 };