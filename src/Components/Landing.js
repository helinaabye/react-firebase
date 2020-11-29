import React from 'react';
import { Button, Container, CssBaseline, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Slide from './Slide';
import classnames from 'classnames';
import { withRouter } from "react-router-dom";

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
  margin: {
    margin: theme.spacing(2, 0, 1),
  },
}));

const Landing = (props) => {
  const classes = useStyles();
  const { history } = props;

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
            <Grid item container xs={12} className={classes.padding}>
              <Grid item container sm={12} md={6} className={classes.position}>
                <Container maxWidth="sm" component="main" className={classes.padding}>
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    Travel
                    </Typography>
                    <Typography variant="h5" align="center" color="textPrimary" component="p">
                    Find welcoming hosts that will take you to the places you wish to travel.
                    </Typography>
                    <Button
                    variant="contained"
                    color="primary" 
                    className={classes.margin}
                    onClick={() => {history.push('/add/travel')}}>
                      Post a request
                    </Button>
                </Container>
              </Grid>
              <Grid item sm={12} md={6} className={classes.position}>
                <Slide type={"travel"}/>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <div className={classnames(classes.imageStyle, classes.position, classes.sectionImg)}>
                </div>
            </Grid>
            <Grid item container xs={12}  className={classes.padding}>
              <Grid item sm={12} md={6} className={classes.position}>
                <Slide type={"host"}/>
              </Grid>
              <Grid item container sm={12} md={6} className={classes.position}>
                <Container maxWidth="sm" component="main" className={classes.padding}>
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    Host
                    </Typography>
                    <Typography variant="h5" align="center" color="textSecondary" component="p">
                    Show someone the special places you know by hosting and getting paid.
                    </Typography>
                    <Button
                    variant="contained"
                    color="secondary"
                    className={classes.margin}
                    onClick={() => {history.push('/add/offer')}}>
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

export default withRouter(Landing);