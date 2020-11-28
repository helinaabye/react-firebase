import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthContextProvider from './Contexts/AuthContext';
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';


function App() {
  return (
    <div className="App">
      <AuthContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact from="/" component={Home}/>
          <Route path='/sign in' component={SignIn}/>
          <Route path='/sign up' component={SignUp}/>
        </Switch>
      </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
