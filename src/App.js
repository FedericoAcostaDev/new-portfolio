import React from "react";

import {Container, Paper} from '@material-ui/core';
import {ThemeProvider} from '@material-ui/core/styles'
import theme from './theme'
import photo2 from './Assets/header.png';
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/About/Header";
import ControlledAccordions from "./components/Acordion/Acordion";
import ImgMediaCard from "./components/Cards/Cards";
import DatePicker from "./components/Calendar/Calendar";
import Footer from "./components/Footer/Footer";
import Scroll from "./components/ScrollButton/ScrollButton";
import { Link } from "react-scroll";


const App = () => {
  return (
    <ThemeProvider theme={theme}>       
    <NavBar />
    <Scroll showBelow={250}/>
    <div style={{ 
      backgroundImage: `url(${photo2})`, //ES6
      backgroundPosition: 'center',
  backgroundSize: 'expand',
  backgroundRepeat: 'no-repeat'  }}>
    
      <Header />
    <Container maxWidth='lg'>
    <Paper >
        <ControlledAccordions />
        <ImgMediaCard />
        <DatePicker /> 
        </Paper>
    </Container>
    <Footer/>
    </div>  
    </ThemeProvider>
  );
};

export default App;
