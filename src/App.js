import React from "react";

import {Grid, Container, Paper, IconButton } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { withTheme } from "./theme";
import photo2 from "./Assets/header.png";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/About/Header";
import ControlledAccordions from "./components/Acordion/Acordion";
import Projects from "./components/Cards/Cards";
import DatePicker from "./components/Calendar/Calendar";
import Footer from "./components/Footer/Footer";
import Scroll from "./components/ScrollButton/ScrollButton";
import { makeStyles } from "@material-ui/core/styles";

import Brightness4Icon from "@mui/icons-material/Brightness4";
// import Brightness7Icon from '@mui/icons-material/Brightness7';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper, //"#F5F5F6"
  },
}));

function App() {
  const classes = useStyles();
  const theme= useTheme();
  return (
    <Grid>
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
            <Projects />
            <DatePicker />
          </Paper>
        </Container>
        <Footer />
      </div>
      </Grid>
  );
}
export default withTheme(App);
