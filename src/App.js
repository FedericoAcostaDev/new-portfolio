import React from "react";

import Card from '@material-ui/core/Card';

import NavBar from "./components/NavBar/NavBar";
import Header from "./components/About/Header";
import ControlledAccordions from "./components/Text-img/Text-img";
import ImgMediaCard from "./components/Cards/Cards";
import DatePicker from "./components/Calendar/Calendar";
import Footer from "./components/Footer/Footer";

import "./App.css";

const App = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <Card container direction='column' >
        <ControlledAccordions />
        <ImgMediaCard />
        <DatePicker />
        <Footer/>
      </Card>
    </div>
  );
};

export default App;
