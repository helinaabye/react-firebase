import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import { Route, Redirect } from 'react-router-dom';
import { Button, CircularProgress, Container } from '@material-ui/core';
import firebaseApp from '../config';

const Home = (props) => {
  const { currentUser } = useContext(AuthContext)
  // const [loading, setLoading] = React.useState(true);

  return (
    <Container>
      {/* {loading ? (<CircularProgress/>) : ( */}
        <Route
        {...props}
        render={() => 
         !!currentUser ? (
         <div>
           <p>Hello {currentUser.displayName}</p> 
           <Button
           variant="contained"
           color="primary"
           onClick={() => firebaseApp.auth().signOut()}>
             Sign Out
           </Button>
         </div>
         ) : 
         (<Redirect to={"/sign in"}/>)
         }
         />
      {/* ) } */}
    </Container>     
  );
}

export default Home;