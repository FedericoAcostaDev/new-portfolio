import { createTheme} from '@material-ui/core/styles';

const theme = createTheme({
    palette: {
      type: 'dark',

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
  export default theme;