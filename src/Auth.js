import React, { useState, useEffect } from 'react';

import UserContext from './Context';
import getCookie from '../src/utils/cookie';
import authenticate from '../src/utils/authenticate';
import RESTAPI from '../src/REST API';
import Spinner from 'react-bootstrap/Spinner';

const Auth = (props) => {
  let [user, setUser] = useState(null);
  let [loading, setLoading] = useState(true);

  const logIn = () => {
    setUser({
      ...user,
      loggedIn: true,
    });
  };
  const logOut = () => {
    document.cookie =
      'x-auth-token= ; expires  = Thu, 01 Jan 1970 00:00:00 GMT';
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    localStorage.removeItem('profilePicture');
    setUser({
      loggedIn: false,
    });
  };
  useEffect(() => {
    const token = getCookie('x-auth-token');

    if (!token) {
      logOut();
      setLoading(false);
      return;
    }
    authenticate(
      RESTAPI.name + 'users/login',
      {
        username: localStorage.getItem('username'),
        password: localStorage.getItem('password'),
      },
      (user) => {
        setUser(user);
      },
      (e) => {
        console.log('Error', e);
      },
      setLoading
    );
  }, []);

  if (loading) {
    return <Spinner animation="border" variant="info" />;
  }

  return (
    <UserContext.Provider
      value={{
        user,
        logIn,
        logOut,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default Auth;
