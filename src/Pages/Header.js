import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Toolbar, Button, Typography} from '@material-ui/core';
import firebaseApp from '../config';
import { AuthContext } from '../Contexts/AuthContext';

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

export default function Header(props) {
  const classes = useStyles();
  const { currentUser } = useContext(AuthContext)

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
      <Typography>Hello {currentUser.displayName}</Typography> 
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
        <Button
        variant="contained"
        color="primary"
        onClick={() => firebaseApp.auth().signOut()}>
          Sign Out
        </Button>
      </Toolbar>
    </React.Fragment>
  );
}
