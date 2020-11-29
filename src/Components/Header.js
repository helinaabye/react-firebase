import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Toolbar, Button, Typography, Hidden } from '@material-ui/core';
import firebaseApp from '../config';
import { AuthContext } from '../Contexts/AuthContext';
import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  padding: {
    padding: theme.spacing(1),
  },
}));

const Header = ({ history }) => {
  const classes = useStyles();
  const { currentUser } = useContext(AuthContext)

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
      {
           !!currentUser ? (
            <Button
            variant="outlined"
            color="primary"
            onClick={() => {history.push('/view')}}>
              See Posts
            </Button>
            ) : (
              <Typography>Welcome</Typography> 
            )
        }
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
          onClick={() => {history.push('/')}}
        >
          Travel B&amp;B
        </Typography>
        {
           !!currentUser ? (
            <>
              <Hidden smDown>
                <Typography className={classes.padding}>Hello {currentUser.displayName}</Typography>
              </Hidden>
              <Button
              variant="contained"
              color="primary"
              onClick={() => firebaseApp.auth().signOut()}>
                Sign Out
              </Button>
            </>
            ) : (
              <Button
              variant="outlined"
              color="primary"
              onClick={() => {history.push('/sign in')}}>
                Sign In
              </Button>
            )
        }
      </Toolbar>
    </React.Fragment>
  );
}

export default withRouter(Header);