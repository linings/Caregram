import React, { useContext } from 'react';
import UserContext from '../../Context';
import Articles from '../../components/articles';
import HomeGuest from '../../components/homeGuest';

const HomePage = () => {
  const context = useContext(UserContext);
  const isLoggedIn = context.user && context.user.loggedIn;
  return isLoggedIn ? <Articles /> : <HomeGuest />;
};

export default HomePage;
