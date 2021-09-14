import React from 'react';

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, CardActionArea, CardActions,CardContent  } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

const DatePicker = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root} >
      <CardActionArea>
        <CardContent>
          
          <Card item xs color="textSecondary" component="p">
          <form className={classes.container} noValidate>
  <TextField
    id="datetime-local"
    label=""
    type="datetime-local"
    defaultValue="2017-05-24T10:30"
    className={classes.textField}
    InputLabelProps={{
      shrink: true,
    }}
  />
</form>
    
    <CardActions>
    <Button size="small" color="primary">
          Appoint a Meeting
        </Button>
      </CardActions>
          </Card>
        </CardContent>
      </CardActionArea>
      
    </Card>
    
  );
}

export default DatePicker;


