import React from 'react';


import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, CardActionArea, CardActions  } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  root: {
    backgroundColor: '#F5F5F6'
},
button: {
  backgroundColor: '#FFA726'
},
}));

const DatePicker = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root} >
      <CardActionArea>
        
          
      
    
    <CardActions>
    <Button className={classes.button} href="https://calendly.com/meetingwithfede/meet" color="inherit">
  Schedule a meeting
</Button >
      </CardActions>
      </CardActionArea>     
    </Card>
    
  );
}

export default DatePicker;


