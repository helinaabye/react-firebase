import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthContextProvider from './Contexts/AuthContext';
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Add from './Pages/Add';
import Edit from './Pages/Edit';
import View from './Pages/View';


function App() {
  return (
    <div className="App">
      <AuthContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact from="/" component={Home}/>
          <Route path='/sign in' component={SignIn}/>
          <Route path='/sign up' component={SignUp}/>
          <Route path='/add/:type' component={Add}/>
          <Route path='/edit' component={Edit}/>
          <Route path='/view' component={View}/>
        </Switch>
      </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
