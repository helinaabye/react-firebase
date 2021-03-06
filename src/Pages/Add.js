import React from 'react';
import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Paper, Box, Grid, Typography, Link } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from "react-router-dom";
import Copyright from '../Components/Copyright';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://unsplash.com/photos/hYjIYsJuyVQ/download?force=true&w=1920)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Add = (props) => {
  const classes = useStyles();
  const { history, match } = props;
  const { params } = match;
  const { type } = params;

  console.log(type)
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} className={classes.image}>
      <Grid item container xs={12} sm={8} md={6} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <AddCircleIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {type === "travel" ? "Add Travel" : "Add Offer" }
          </Typography>
          <form className={classes.form} noValidate onSubmit={null}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="city"
                    label={type === "travel" ? "What City in Ethiopia do you want to travel to?" : "What City in Ethiopia do you want to host in?" } 
                    name="city"
                    autoComplete="city"
                    autoFocus
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="description"
                    label={type === "travel" ? "Please describe the experiences you wish to have" : "Please describe the experiences you wish to offer" } 
                    type="description"
                    id="description"
                    autoComplete="description"
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Email me if anyone responds"
                    />
                </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
            {type === "travel" ? "Submit Request" : "Submit Offer" }              
            </Button>
            <Grid container>
              <Grid item xs={6}>
                <Link onClick={() => {history.push('/view')}} variant="body2">
                    {type === "travel" ? "View Offers" : "View Requests" }    
                </Link>
              </Grid>
              <Grid item xs={6}>
                <Link 
                onClick={() => {history.push('/')}} 
                variant="body2">
                  {"Back to Home"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>   
      </Grid>
      </Grid>
    </Grid>
  );
}

export default withRouter(Add);