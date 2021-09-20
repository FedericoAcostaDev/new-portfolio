import React from 'react';

import {Card, Container }from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {Button, Grid} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function ImgMediaCard(props) {
  const classes = useStyles(props);

  return (

    <Container  >
        <Typography variant='body1' align="left" gutterBottom >
          Projects
        </Typography>
        
        <Grid container  spacing={10} justifyContent='space-between' >
        <Grid item xs={10} >
        <Grid container alignContent='space-around'>
    <Card className={classes.root} >
      <CardActionArea>
        <CardMedia
          component="img"
          alt="ecommerce"
          height="140"
          image="../../Assets/E-MARKET.png"
          title="ecommerce"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            E-Market
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          live Demo
        </Button>
        <Button size="small" color="primary">
          Source Code
        </Button>
      </CardActions>
    </Card>
    </Grid>
    <Grid item  xs >
    <Card className={classes.root} >
      <CardActionArea>
        <CardMedia
          component="img"
          alt="ecommerce"
          height="140"
          image="../../Assets/E-MARKET.png"
          title="ecommerce"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </Grid>
    <Grid item  xs >
    <Card className={classes.root} >
      <CardActionArea>
        <CardMedia
          component="img"
          alt="ecommerce"
          height="140"
          image="../../Assets/E-MARKET.png"
          title="ecommerce"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </Grid>
    <Grid item  xs>    
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="ecommerce"
          height="140"
          image="/static/images/cards/E-MARKET.png"
          title="ecommerce"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </Grid>
    </Grid>
    </Grid>
    </Container>
  );
}