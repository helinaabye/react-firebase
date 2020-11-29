import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import Card from '../Components/Card';
import Header from '../Components/Header';
import { makeStyles } from '@material-ui/core/styles';
import Footer from '../Components/Footer';

const useStyles = makeStyles((theme) => ({
  padding: {
    padding: theme.spacing(4, 0, 2),
  },
}));

const View = () => {
    const classes = useStyles();
    const Posts = [
        {
          title: 'Arbaminch',
          date: 'Nov 12',
          description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
          image: 'https://unsplash.com/photos/SPv-vFzuA5Q/download?force=true&w=640',
          imageText: 'Image Text',
        },
        {
          title: 'Lalibela',
          date: 'Nov 11',
          description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
          image: 'https://unsplash.com/photos/6SgfEwkA02Y/download?force=true&w=640',
          imageText: 'Image Text',
        },
        {
          title: 'Dallol',
          date: 'Nov 11',
          description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
          image: 'https://unsplash.com/photos/r0c_9MUD6lc/download?force=true&w=640',
          imageText: 'Image Text',
        },
        {
          title: 'Addis Ababa',
          date: 'Nov 11',
          description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
          image: 'https://unsplash.com/photos/jbr6D4wjD5k/download?force=true&w=640',
          imageText: 'Image Text',
        },
      ];

  return (
    <>
        <Header/>
        <Container>
            <Typography variant="h4" align="center" color="primary" className={classes.padding}>
                Your Travel Requests
            </Typography>
            <Grid container spacing={4} className={classes.padding}>
            {Posts.map((post) => (
                <Card key={post.title} post={post} />
            ))}
            </Grid>
        </Container>
        <Footer/>
    </>
  );
}

export default View;