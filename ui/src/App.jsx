// client side
import React from 'react';
import ReactDOM from 'react-dom';

import PageRouter from './PageRouter'

import 'babel-polyfill';
import 'whatwg-fetch';
import { HashRouter as Router } from 'react-router-dom';

const element = (
  <Router>
    <PageRouter />
  </Router>
);

ReactDOM.render(element, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
  console.log(`this is hotmodule ${module.hot}`);
}
