import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PageLayout from '../../components/page-layout';
import styles from './index.module.css';
import authenticate from '../../utils/authenticate';

import UserContext from '../../Context';
import RESTAPI from '../../REST API';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();
  const context = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    authenticate(
      RESTAPI.name + 'users/login',
      {
        username,
        password,
      },
      (user) => {
        context.user = user;
        history.push('/');
      },
      (e) => {
        console.log('Error', e);
      }
    );
  };
  return (
    <div>
      <PageLayout />
      <form className={styles.form} onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            className={styles['form-input']}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className={styles['form-input']}
          />
        </div>
        <button type="submit" className={styles.btn}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
