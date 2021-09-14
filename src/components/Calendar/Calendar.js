import React from 'react';
import useStyles from './Styles';
import TextField from '@material-ui/core/TextField';
import { Button, Card, CardActionArea, CardActions,CardContent  } from '@material-ui/core';




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


