import React, { useContext } from 'react';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/home';
import RegisterPage from './pages/register-page';
import LoginPage from './pages/login-page';
import AddStory from './pages/addStory-page';
import MyStories from './pages/myStories-page';
import UserContext from './Context';

const Navigation = () => {
  const context = useContext(UserContext);
  const loggedIn = context.user ? context.user.loggedIn : null;

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        {/* <Route path="/register" component={RegisterPage} /> */}
        {/* <Route path="/login" component={LoginPage} /> */}
        {/* <Route path="/addStory" component={AddStory} /> */}
        {/* <Route path="/myStories" component={MyStories} /> */}
        <Route path="/login">
          {loggedIn ? <Redirect to="/" /> : <LoginPage />}
        </Route>
        <Route path="/register">
          {loggedIn ? <Redirect to="/" /> : <RegisterPage />}
        </Route>
        <Route path="/addStory">
          {!loggedIn ? <Redirect to="/login" /> : <AddStory />}
        </Route>
        <Route path="/myStories">
          {!loggedIn ? <Redirect to="/login" /> : <MyStories />}
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Navigation;
