import React from 'react';
import { Route } from 'react-router-dom';
import Login from './login/Login';
import Home from './home/Home';
import Explore from './explore/Explore'
import Pdp from './pdp/Pdp';
import Signup from './signup/Signup';

const index = () => {
  return (
    <>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
      <Route exact path="/explorenow">
        <Explore />
      </Route>
      <Route exact path="/shopnow">
        <Explore />
      </Route>
      <Route path="/explorenow/:id">
        <Pdp />
      </Route>
    </>
  )
}

export default index