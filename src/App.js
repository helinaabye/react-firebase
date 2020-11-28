import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact from="/" render={props => <Home {...props}/>}/>
          <Route path='/sign in' render={props => <SignIn {...props}/>} />
          <Route path='/sign up' render={props => <SignUp {...props}/>}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
