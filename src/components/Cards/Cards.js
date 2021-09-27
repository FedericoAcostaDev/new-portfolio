//icons from https://icons8.com

import React from "react";

import { Card, Container } from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Button, Grid, ThemeProvider, Divider } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import theme from "../../theme";

const useStyles = makeStyles({
  container: {
    paddingTop: '50px',
    paddingBottom: '50px',
  },
  root: {
    maxWidth: 340,
    minWidth: 300,
    borderRadius: '0px',
    backgroundColor: 'primary',
    
  },
  media: {
    height: 120,
  },
  title: {
    
  },
  cards: {
    marginTop: '20px'
  }
});

export default function ImgMediaCard(props) {
  const classes = useStyles(props);

  return (
    <ThemeProvider theme={theme} >
      <Container id='projects' className={classes.container}  align='center' direction="column" sx={{ flexGrow: 1 }} >
        <Typography className={classes.title} variant="h6"   align="center" gutterBottom>
          Portfolio Projects
        </Typography>
        <Divider variant="middle" />


        <Grid container className={classes.cards} justifyContent='center' direction="row" spacing={3} columns={{ xs: 4, sm: 8, md: 12 }}  >
          <Grid item sx>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="ecommerce"
                    image="/market.png"
                    title="ecommerce"
                  />
                  <CardContent>
                    <Typography variant="h5" component="h2">
                      E-Market
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      In Beta, site in progress
                      React.js|Node.js|Rest API's|React-Hooks
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="secondary"
                  href="https://dazzling-jones-1f1868.netlify.app/"
                  >
                    live Demo
                  </Button>
                  <Button size="small" color="primary"
                  href="https://github.com/FedericoAcostaDev/e-market"
                  >
                    Source Code
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="ecommerce"
                    image="/pumpkin.png"
                    title="ecommerce"
                  />
                  <CardContent>
                    <Typography variant="h5" component="h2">
                      Mix-or-Match
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      A matching game
                      HTML|CSS|JavaScript
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="secondary"
                  href='https://boring-northcutt-06aca7.netlify.app/'
                  >
                    Live demo
                  </Button>
                  <Button size="small" color="primary"
                  href='https://github.com/FedericoAcostaDev/MATCHINGGAME'
                  >
                    Source code
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="ecommerce"
                    image="/brain.png"
                    title="ecommerce"
                  />
                  <CardContent>
                    <Typography variant="h5" component="h2">
                      Face Detector
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Insert an image URL and the API will recognize faces in the image
                      React.js|Rest API's|Node.js|SQL
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                <Button size="small" color="secondary"
                href='https://smartfar.herokuapp.com/'
                >
                    Live demo
                  </Button>
                  <Button size="small" color="primary"
                  href='https://github.com/FedericoAcostaDev/FaceAppRecognition'>
                    Source code
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="ecommerce"
                    image="/robot.png"
                    title="ecommerce"
                  />
                  <CardContent>
                    <Typography variant="h5" component="h2">
                      RoboFriends
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      A search engine to find your BRF (Best RoboFriend)
                      React.js|Node.js
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                <Button size="small" color="secondary"
                href='https://robofa.herokuapp.com/'
                >
                    Live demo
                  </Button>
                  <Button size="small" color="primary"
                  href='https://github.com/FedericoAcostaDev/RoboFriends'
                  >
                    Source code
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
      </Container>
    </ThemeProvider>
  );
}
