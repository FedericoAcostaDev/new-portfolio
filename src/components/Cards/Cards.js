//icons from https://icons8.com

import React from "react";

import { Card, Container } from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Button, Grid, ThemeProvider } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import theme from "../../theme";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 120,
  },
});

export default function ImgMediaCard(props) {
  const classes = useStyles(props);

  return (
    <ThemeProvider theme={theme} >
      <Container direction="row" sx={{ flexGrow: 1 }} >
        <Typography variant="h6"   align="center" gutterBottom>
          Projects
        </Typography>

        <Grid container direction="row" spacing={3} columns={{ xs: 4, sm: 8, md: 12 }}  >
          <Grid item xs>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="ecommerce"
                    height="140"
                    image="/market.png"
                    title="ecommerce"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
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
                  <Button size="small" color="secondary">
                    live Demo
                  </Button>
                  <Button size="small" color="primary">
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
                    height="140"
                    image="/pumpkin.png"
                    title="ecommerce"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
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
                  <Button size="small" color="secondary">
                    Live demo
                  </Button>
                  <Button size="small" color="primary">
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
                    height="140"
                    image="/brain.png"
                    title="ecommerce"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
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
                <Button size="small" color="secondary">
                    Live demo
                  </Button>
                  <Button size="small" color="primary">
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
                    height="140"
                    image="/robot.png"
                    title="ecommerce"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
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
                <Button size="small" color="secondary">
                    Live demo
                  </Button>
                  <Button size="small" color="primary">
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
