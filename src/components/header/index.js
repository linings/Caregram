import React, { useContext } from 'react';

import { useHistory } from 'react-router-dom';
import styles from './index.module.css';
import getNavigation from '../../utils/navigation';
import logo from '../../public/logo.jpg';
import LinkComponent from '../link';
import UserContext from '../../Context';

const Header = () => {
  const context = useContext(UserContext);
  const history = useHistory();
  const { user } = context;

  const links = getNavigation(user);

  return (
    <header className={styles.navigation}>
      <img className={styles.logo} src={logo} alt="caregram"></img>
      <div className={styles.wrapper}>
        {links.map((navElement) => {
          return (
            <LinkComponent
              key={navElement.title}
              title={navElement.title}
              href={navElement.href}
              type="header"
            />
          );
        })}
      </div>
    </header>
  );
};

export default Header;
