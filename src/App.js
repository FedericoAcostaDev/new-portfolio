import React from "react";

import { Container, Paper, IconButton } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import photo2 from "./Assets/header.png";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/About/Header";
import ControlledAccordions from "./components/Acordion/Acordion";
import ImgMediaCard from "./components/Cards/Cards";
import DatePicker from "./components/Calendar/Calendar";
import Footer from "./components/Footer/Footer";
import Scroll from "./components/ScrollButton/ScrollButton";
import { makeStyles } from "@material-ui/core/styles";

import Brightness4Icon from "@mui/icons-material/Brightness4";
// import Brightness7Icon from '@mui/icons-material/Brightness7';

const useStyles = makeStyles({
  container: {
    backgroundColor: "#F5F5F6",
  },
});

export default function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
        <NavBar/>

      <Scroll showBelow={250} />
      <div
        style={{
          backgroundImage: `url(${photo2})`, //ES6
          backgroundPosition: "center",
          backgroundSize: "expand",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Header />

        <Container maxWidth="lg">
          <Paper className={classes.container}>

          <IconButton>
            ­<Brightness4Icon />
          </IconButton>
          
            <ControlledAccordions />
            <ImgMediaCard />
            <DatePicker />
          </Paper>
        </Container>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
