import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PageLayout from '../../components/page-layout';
import styles from './index.module.css';
import authenticate from '../../utils/authenticate';

import UserContext from '../../Context';
import RESTAPI from '../../REST API';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const context = useContext(UserContext);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    authenticate(
      RESTAPI.name + 'data/Users',
      {
        username,
        password,
        rePassword,
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
            value={username}
            placeholder="Email"
            type="email"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            className={styles['form-input']}
          />
        </div>
        <div>
          <input
            value={password}
            placeholder="Password"
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className={styles['form-input']}
          />
        </div>
        <div>
          <input
            value={rePassword}
            placeholder="Re-password"
            type="password"
            onChange={(e) => {
              setRePassword(e.target.value);
            }}
            className={styles['form-input']}
          />
        </div>
        <button type="submit" className={styles.btn}>
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
