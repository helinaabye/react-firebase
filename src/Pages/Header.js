import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Toolbar, Button, Typography} from '@material-ui/core';
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
}));

const Header = (props) => {
  const classes = useStyles();
  const { history } = props;
  const { currentUser } = useContext(AuthContext)

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
      {
           !!currentUser ? (
            <Typography>Hello {currentUser.displayName}</Typography> 
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
        >
          Travel B&amp;B
        </Typography>
        {
           !!currentUser ? (
            <Button
            variant="contained"
            color="primary"
            onClick={() => firebaseApp.auth().signOut()}>
              Sign Out
            </Button>
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