import React from "react";

import {Container} from '@material-ui/core';
import {ThemeProvider, createTheme} from '@material-ui/core/styles'

import NavBar from "./components/NavBar/NavBar";
import Header from "./components/About/Header";
import ControlledAccordions from "./components/Acordion/Acordion";
import ImgMediaCard from "./components/Cards/Cards";
import DatePicker from "./components/Calendar/Calendar";
import Footer from "./components/Footer/Footer";

const theme = createTheme({
  palette: {
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
  },
});


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
    <NavBar />
      <Header />
    <Container maxWidth='lg'>
        <ControlledAccordions />
        <ImgMediaCard />
        <DatePicker />  
    </Container>
    <Footer/>
    </div>
    </ThemeProvider>
  );
};

export default App;
