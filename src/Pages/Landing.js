import React from 'react';
import { Button, Container, CssBaseline, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TravelCard from './TravelCard';
import classnames from 'classnames';

const useStyles = makeStyles((theme) => ({
  imageStyle: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: "white",
    fontWeight: "bold",
    fontSize: "xxx-large"
  },
  headerImg: {
    backgroundImage: 'url(https://unsplash.com/photos/hYjIYsJuyVQ/download?force=true&w=1920)',
    height: "100vh",
  },
  sectionImg: {
    backgroundImage: 'url(https://unsplash.com/photos/BMp-1GyoOIs/download?force=true&w=1920)',
    height: "25vh",
  },
  footerImg: {
    backgroundImage: 'url(https://unsplash.com/photos/37V_a2zE4C4/download?force=true&w=1920)',
    height: "50vh",
  },
  position: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  padding: {
    padding: theme.spacing(8, 0, 6),
  },
}));

const Landing = () => {
  const classes = useStyles();

  return (
           <>
          <CssBaseline />
           <Grid>
            <Grid item xs={12}>
              <div className={classnames(classes.imageStyle, classes.position, classes.headerImg)}>
                Discover Unique Experiences<br />
                with Travel B&amp;B
                </div>
            </Grid>
            <Grid item container xs={12}  className={classes.padding}>
              <Grid item xs={12} sm={6} className={classes.position}>
                <Container maxWidth="sm" component="main" className={classes.padding}>
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    Travel
                    </Typography>
                    <Typography variant="h5" align="center" color="textSecondary" component="p">
                    Find welcoming hosts that will take you to the places you wish to travel.
                    </Typography>
                    <Button
                    variant="contained"
                    color="primary"
                    onClick={null}>
                      Post a request
                    </Button>
                </Container>
              </Grid>
              <Grid item xs={12} sm={6} className={classes.position}>
                <TravelCard/>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <div className={classnames(classes.imageStyle, classes.position, classes.sectionImg)}>
                </div>
            </Grid>
            <Grid item container xs={12}  className={classes.padding}>
              <Grid item xs={12} sm={6} className={classes.position}>
                <TravelCard/>
              </Grid>
              <Grid item xs={12} sm={6} className={classes.position}>
                <Container maxWidth="sm" component="main" className={classes.heroContent}>
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    Host
                    </Typography>
                    <Typography variant="h5" align="center" color="textSecondary" component="p">
                    Show someone the special places you know by hosting and getting paid.
                    </Typography>
                    <Button
                    variant="contained"
                    color="secondary"
                    onClick={null}>
                      Post an offer
                    </Button>
                </Container>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <div className={classnames(classes.imageStyle, classes.position, classes.footerImg)}>
                Start your journey today!
                </div>
            </Grid>
           </Grid>
    </>     
  );
}

export default Landing;