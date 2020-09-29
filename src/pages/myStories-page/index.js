import React from 'react';
import Articles from '../../components/articles';
import PageLayout from '../../components/page-layout';
import styles from './index.module.css'

const MyStories = () => {
  return (
    <div>
      <PageLayout />
      <h3 className={styles['your-stories']}>Your stories:</h3>
      <Articles />
    </div>
  );
};

export default MyStories;
