import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navigation from './navigation';
import Auth from './Auth';

ReactDOM.render(
  <Auth>
    <Navigation />
  </Auth>,
  document.getElementById('root')
);
