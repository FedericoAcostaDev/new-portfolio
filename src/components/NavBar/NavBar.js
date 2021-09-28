import React from "react";
import { PropTypes } from "prop-types";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  makeStyles,
} from "@material-ui/core/";

import BasicMenu from "./Menu";

const useStyles = makeStyles((theme) => ({
  menuIcon: {
    flexGrow: 1,
    justifyContent: "left",
  },
}));

const NavBar = ({ color, children }) => {
  const classes = useStyles();
  return (
    <Box>
      {children}
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <IconButton className={classes.menuIcon} size="small">
            <BasicMenu />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

NavBar.propTypes = {
  color: PropTypes.string,
};

export default NavBar;
