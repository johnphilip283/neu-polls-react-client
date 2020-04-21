import React from 'react';
import './App.scss';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import LoginContainer from './containers/LoginContainer';
import HomeScreenComponent from './home/HomeScreenComponent';
import ProfileScreenComponent from './profile/ProfileScreenComponent';
import PollDetailComponent from './poll/PollDetailComponent';
import AddCommentAndSearchComponent from './comments/AddCommentAndSearchComponent';
import PrivacyComponent from './privacy/PrivacyComponent';

import ProfilePollCommentComponent from './profile/ProfilePollCommentComponent'

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={HomeScreenComponent}></Route>
      <Route exact path="/login" component={LoginContainer}></Route>
      <Route exact path="/profile" component={ProfileScreenComponent}></Route>
      <Route exact path="/profile/:userId" render={props => <ProfileScreenComponent userId={props.match.params.userId}/>}></Route>
      <Route exact path="/details/:pid" render={props => <PollDetailComponent pid={props.match.params.pid}/>}></Route>
      <Route exact path="/profile/:userId/polls" render={props => <ProfilePollCommentComponent userId={props.match.params.userId} type={'poll'}/>}></Route>
      <Route exact path="/polls/:pid" render={props => <PollDetailComponent pid={props.match.params.pid}/>}></Route>
      <Route exact path="/profile/:userId/comments" render={props => <ProfilePollCommentComponent userId={props.match.params.userId} type={'comment'}/>}></Route>
      <Route exact path="/details/:pid/search" render={props => <AddCommentAndSearchComponent pid={props.match.params.pid}/>}></Route>
      <Route exact path="/privacy" component={PrivacyComponent}></Route>
    </Router>
  );
};

export default App;
