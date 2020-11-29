import React from 'react';
import { CssBaseline, Container, Toolbar, Link} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Copyright from './Copyright';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
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

export default function Footer() {
  const classes = useStyles();

  const sections = [
      {
          title: "Home",
          url: "#"
      },
      {
          title: "Travel",
          url: "#"
      },
      {
          title: "Host",
          url: "#"
      },
      {
          title: "Contact",
          url: "#"
      },
  ]

  return (
    <div className={classes.root}>
      <CssBaseline />
      <footer className={classes.footer}>
        <Container maxWidth="sm">
            <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
                {sections.map((section) => (
                <Link
                    color="inherit"
                    noWrap
                    key={section.title}
                    variant="body2"
                    href={section.url}
                    className={classes.toolbarLink}
                >
                    {section.title}
                </Link>
                ))}
            </Toolbar>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}