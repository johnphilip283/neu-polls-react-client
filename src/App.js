import React from 'react';
import './App.scss';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import LoginContainer from './containers/LoginContainer';
import HomeScreenComponent from './home/HomeScreenComponent';
import ProfileScreenComponent from './profile/ProfileScreenComponent';

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={HomeScreenComponent}></Route>
      <Route exact path="/login" component={LoginContainer}></Route>
      <Route exact path="/profile" component={ProfileScreenComponent}></Route>
      <Route
        exact
        path="/profile/:userId"
        render={(props) => (
          <ProfileScreenComponent userId={props.match.params.userId} />
        )}
      ></Route>
    </Router>
  );
};

export default App;
