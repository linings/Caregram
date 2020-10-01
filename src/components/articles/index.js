import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import styles from './index.module.css';
import API from '../../REST API';
import Article from '../article';
import getCookie from '../../utils/cookie';
import Spinner from 'react-bootstrap/Spinner';

const Articles = () => {
  let [articles, setArticles] = useState([]);
  const locator = useLocation();
  let [loading, setLoading] = useState(true);

  const getArticles = async () => {
    const response = await fetch(API.name + `data/data`);
    const result = await response.json();

    if (result) {
      setLoading(false);
    }

    setArticles(result);
  };

  const renderArticles = () => {
    if (locator.pathname === '/myStories') {
      articles = articles.filter(
        (a) => a.ownerId === getCookie('x-auth-token')
      );
    }

    return articles.map((article) => {
      return <Article key={article.objectId} {...article} />;
    });
  };

  useEffect(() => {
    getArticles();
  }, []);
  if (loading) {
    return <Spinner animation="border" variant="info" />;
  }

  return <div className={styles.content}>{renderArticles()}</div>;
};

export default Articles;
