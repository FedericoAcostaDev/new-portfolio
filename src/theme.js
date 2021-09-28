import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    type: "light",

    primary: {
      light: "#c1d5e0",
      main: "#90a4ae",
      dark: "#62757f",
    },
    secondary: {
      light: "#ffe97d",
      main: "#ffb74d",
      dark: "#c88719",
    },
    error: {
      main: "#f44336",
    },
    warning: {
      main: "#ff9800",
    },
    info: {
      main: "#2196f3",
    },
    success: {
      main: "#4caf50",
    },
  },
});
const themeDark = createTheme({
  palette: {
    type: "dark",

    primary: {
      light: "#c1d5e0",
      main: "#90a4ae",
      dark: "#62757f",
    },
    secondary: {
      light: "#ffe97d",
      main: "#ffb74d",
      dark: "#c88719",
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
  const { children, darkMode } = props;
  const defaultTheme = darkMode ? themeDark : theme;

  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
};

export const withTheme = (Component) => {
  return (props) => {
    const [darkMode, setDarkMode] = useState(false);
    return (
      <Theme darkMode={darkMode}>
        <Component {...props} darkMode={darkMode} setDarkMode={setDarkMode} />
      </Theme>
    );
  };
};
