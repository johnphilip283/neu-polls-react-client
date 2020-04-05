import React from 'react';
import './App.scss';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import LoginScreenComponent from './login/LoginScreenComponent';
import HomeScreenComponent from './home/HomeScreenComponent';
import ProfileScreenComponent from './profile/ProfileScreenComponent'

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
           path='/profile'
           render={() => <ProfileScreenComponent/>}>
    </Route>
    <Route exact
           path='/profile/:userId'
           render={(props) => <ProfileScreenComponent
                                  userId={props.match.params.userId}/>}>
    </Route>
    <Route exact
           path='/test'
           render={() => <div></div>}>
    </Route>
  </Router>

export default App;
