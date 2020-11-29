import React, { createContext, useState, useEffect } from 'react';
import firebaseApp from '../config';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [ currentUser, setCurrentUser ] = useState(null)

  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged(setCurrentUser)
  }, [])

  return (
    <AuthContext.Provider value={{currentUser, setCurrentUser}}>
      { props.children }
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;