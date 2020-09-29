import React from 'react';

import PageLayout from '../page-layout';
import HomePage from '../../pages/home';
import Profile from '../profile';

const Home = () => {
  const isLoggedIn = localStorage.getItem('username');

  return isLoggedIn ? (
    <div>
      <PageLayout />
      <HomePage />
      <Profile />
    </div>
  ) : (
    <div>
      <PageLayout />
      <HomePage />
    </div>
  );
};

export default Home;
