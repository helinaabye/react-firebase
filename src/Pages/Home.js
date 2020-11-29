import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import { Route, Redirect } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import Footer from './Footer';
import Header from './Header';
import Landing from './Landing';

const Home = (props) => {
  const { currentUser } = useContext(AuthContext)
  // const [loading, setLoading] = React.useState(true);

  return (
    <>
      {/* {loading ? (<CircularProgress/>) : ( */}
        <Route
        {...props}
        render={() => 
         !!currentUser ? (
           <>
          <CssBaseline />
          <Header/>
          <Landing/>
           <Footer/>
           </>
         ) : 
         (<Redirect to={"/sign in"}/>)
         }
         />
      {/* ) } */}
    </>     
  );
}

export default Home;