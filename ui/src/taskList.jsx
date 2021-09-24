import React from 'react';

import Formulaire from './formulaire.jsx';
import TaskFilter from './taskFilter.jsx';
import TaskTable from './taskTable.jsx';
import Header from './Header.jsx';

export default class TaskList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <hr />
        <Formulaire />
        <hr />
        <TaskFilter />
        <hr />
        <TaskTable />
      </React.Fragment>
    );
  }
}
