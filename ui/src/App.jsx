// client side
import React from 'react';
import ReactDOM from 'react-dom';

import TaskList from './taskList.jsx';
import 'babel-polyfill';
import 'whatwg-fetch';

const element = <TaskList />;

ReactDOM.render(element, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
  console.log(`this is hotmodule ${module.hot}`);
}
