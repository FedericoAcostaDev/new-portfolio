import React from "react";

import { Grid, Container, Paper, IconButton, AppBar, Box, Toolbar } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { withTheme } from "./theme";
import photo2 from "./Assets/header.png";
import photo3 from "./Assets/header-dark.png";
import BasicMenu from "./components/NavBar/Menu";
import Header from "./components/About/Header";
import ControlledAccordions from "./components/Acordion/Acordion";
import Projects from "./components/Cards/Cards";
import DatePicker from "./components/Calendar/Calendar";
import Footer from "./components/Footer/Footer";
import Scroll from "./components/ScrollButton/ScrollButton";
import { makeStyles } from "@material-ui/core/styles";

import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const useStyles = makeStyles((theme) => ({
  wallpaper: {
    backgroundImage:
      theme.palette.type === "dark" ? `url(${photo3})` : `url(${photo2})`,
  },
  container: {
    backgroundColor: theme.palette.background.paper, //"#F5F5F6"
  },
  menuIcon: {
    flexGrow: 1,
    justifyContent: "left",
  },
}));

function App(props) {
  const { darkMode, setDarkMode } = props;
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Grid>
      <Box>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <IconButton className={classes.menuIcon} size="small">
            <BasicMenu />
          </IconButton>
          <IconButton
              checked={darkMode}
              onClick={() => setDarkMode(!darkMode)}
            >
              {theme.palette.type === "dark" ? (
                <Brightness7Icon />
              ) : (
                <Brightness4Icon />
              )}
            </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
      <Scroll showBelow={250} />
      <div
        className={classes.wallpaper}
        style={{
          backgroundPosition: "center",
          backgroundSize: "expand",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Header />

        <Container maxWidth="lg">
          <Paper className={classes.container}>
            

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
