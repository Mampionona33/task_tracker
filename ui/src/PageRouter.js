import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from './home/homePage.jsx';
import TaskList from './taskList/taskList.jsx';

const NotFound = () => <h1>Page Not Found ...</h1>;

export default function PageRouter() {
  return (
    <Switch>
      <Redirect exact from='/' to='/home' />
      <Route path='/home' component={HomePage} />
      <Route path='/task_list' component={TaskList} />
      <Route component={NotFound} />
    </Switch>
  );
}
