import React from 'react';
import { CssBaseline } from '@material-ui/core';
import Footer from './Footer';
import Header from './Header';
import Landing from './Landing';

const Home = () => {

  return (
    <>
      <CssBaseline />
      <Header/>
      <Landing/>
      <Footer/>
    </>
  );
}

export default Home;