import React from "react";
import { Grid } from "@material-ui/core";
import { Accordion, Button } from "@material-ui/core/";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import theme from '../../theme';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: "3vw",
  },
  button: {
    margin: "4vw",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function ControlledAccordions() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <ThemeProvider theme={theme}>
      <Grid id='about'
        container
        className={classes.root}
        direction="column"
        spacing={3}
        columns={{ xs: 2, sm: 1, md: 2 }}
      >
        <Grid item xs>
          <Typography variant="h6" align="center" gutterBottom>
            I create websites with attention to detail and a faithful rendering
            to the design.
          </Typography>
        </Grid>
        <Grid item xs>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className={classes.heading} variant="subtitle2">
                Front-End Integration
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2">
                Semantic integration in compliance with web standards, display
                and usability tests on all the main browsers on the market.
                <br/>
                 HTML / CSS / JS / React.js /GraphQL/ webpack / sass - Git
              </Typography>
              <Typography variant="body2"></Typography>
              <Typography variant="body2"></Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography className={classes.heading} variant="subtitle2">
                e-commerce sites
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2">
                Creation of tailor-made themes with a back office that is simple
                and intuitive to use. I use the native Commerce.js, Rest API's
                to custom post types, menu location, creation of widgets and
                templates.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography className={classes.heading} variant="subtitle2">
                Back & Data{" "}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2">
                Back-End: Node.js/ Daemon/ Express.js/ PostMan/ PostgreSQL/
                Commerce.js
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
      <Grid container  direction='column' alignItems='center' justifyContent='center'>
      <Button
      variant='contained'
      size="small"
          className={classes.button}
          href="https://docs.google.com/document/d/e/2PACX-1vSnqiI9ocDHFipLmoIsn5zF3iQ2RAAh5diBUrFkq3bJBC7BYFXgNAhwmcxUK-fTGw/pub"
          color="secondary"
        >
          View My Resume
        </Button>
        </Grid>
        </ThemeProvider>
  );
}
