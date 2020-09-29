import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home';
import RegisterPage from './pages/register-page';
import LoginPage from './pages/login-page';
import AddStory from './pages/addStory-page';
import MyStories from './pages/myStories-page';

const Navigation = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/addStory" component={AddStory} />
        <Route path="/myStories" component={MyStories} />
        {/* <Route path="/login">
          {loggedIn ? <Redirect to="/" /> : <LoginPage />}
        </Route> */}
      </Switch>
    </BrowserRouter>
  );
};

export default Navigation;
