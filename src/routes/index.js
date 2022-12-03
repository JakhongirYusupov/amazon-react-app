import React from 'react';
import { Route } from 'react-router-dom';
import Login from './login/Login';
import Home from './home/Home';
import Explore from './explore/Explore'
import Pdp from './pdp/Pdp';
import Signup from './signup/Signup';
import Seemore from './seemore/Seemore';

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
      <Route exact path="/seemore">
        <Seemore />
      </Route>
      <Route path="/explorenow/:id">
        <Pdp />
      </Route>
    </>
  )
}

export default index