import React from 'react';
import './App.scss';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import LoginScreenComponent from './login/LoginScreenComponent';
import HomeScreenComponent from './home/HomeScreenComponent';

const App = () => 
  <Router>
    <Route exact
           path='/'
           render={HomeScreenComponent}>
    </Route>
    <Route exact
           path='/login'
           render={LoginScreenComponent}>
    </Route>
    <Route exact
           path='/test'
           render={() => <div></div>}>
    </Route>
  </Router>

export default App;
