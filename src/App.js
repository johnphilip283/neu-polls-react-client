import React from 'react';
import './App.scss';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import LoginContainer from './containers/LoginContainer';
import HomeScreenComponent from './home/HomeScreenComponent';
import ProfileScreenComponent from './profile/ProfileScreenComponent';
import ProfilePollComponent from './profile/profilepolls/ProfilePollComponent';
import PollDetailComponent from './poll/PollDetailComponent';

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={HomeScreenComponent}></Route>
      <Route exact path="/login" component={LoginContainer}></Route>
      <Route exact path="/profile" component={ProfileScreenComponent}></Route>
      <Route exact path="/profile/:userId" render={props => <ProfileScreenComponent userId={props.match.params.userId}/>}></Route>
<<<<<<< HEAD
      <Route exact path="/details/:pid" render={props => <PollDetailComponent pid={props.match.params.pid}/>}></Route>
=======
      <Route exact path="/profile/:userId/polls" render={props => <ProfilePollComponent userId={props.match.params.userId}/>}></Route>
      <Route exact path="/polls/:pid" render={props => <PollDetailComponent pid={props.match.params.pid}/>}></Route>
>>>>>>> add poll comment viewing functionality
    </Router>
  );
};

export default App;
