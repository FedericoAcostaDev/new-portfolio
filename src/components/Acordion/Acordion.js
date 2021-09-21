import React from "react";
import { Grid } from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));


export default function ControlledAccordions(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div >
    <Grid container direction="row-reverse" spacing={3} columns={{ xs: 2, sm: 1, md: 2 }}  className={classes.root} >
      <Grid item xs  >
        <Typography variant="h6"   align="center" gutterBottom >
          I create websites with attention to detail and a faithful rendering to
          the design.
        </Typography>
      </Grid >
      <Grid item xs alignContent="left">
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading} variant="body1"  >
            Integration in Front-End
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          
            <Typography variant="body2">
              Semantic integration in compliance with web standards, display and
              usability tests on all the main browsers on the market.
            </Typography>
            <Typography variant="subtitle2">
              My typical workflow: 
              </Typography>
              <Typography variant="subtitle2">
              HTML / CSS / JS / React.js /Q-graph/ webpack / sass -
              git
            </Typography>         
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
          <Typography className={classes.heading}>e-commerce sites</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='body2'>
          Creation of tailor-made themes with a back office that is simple and intuitive to use. I use the native Commerce.js Rest API's to custom post types, menu location, creation of widgets and templates.
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
            
          <Typography className={classes.heading}>Back & Data </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='body2'>
        Back-End: Node.js/ Daemon/ Express.js/ PostMan.
        </Typography>
        <Typography variant='subtitle1'>
         Database: postgressQL,commerce.js to create Databases
        </Typography>
        
        </AccordionDetails>
      </Accordion>
      </Grid>
      </Grid>
      </div>
  );
}

