import React from 'react';

import { Link } from 'react-router-dom';
import styles from './index.module.css';

const LinkComponent = ({ title, href }) => {
  return (
    <div className={styles['list-item']}>
      <Link className={styles.link} to={href}>
        {title}
      </Link>
    </div>
  );
};

export default LinkComponent;
