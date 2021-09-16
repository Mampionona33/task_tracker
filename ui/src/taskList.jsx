import React from 'react';

import TaskAdd from './taskAdd.jsx';
import TaskFilter from './taskFilter.jsx';
import TaskTable from './taskTable.jsx';

export default class TaskList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Task Tracker</h1>
        <TaskAdd />
        <hr />
        <TaskFilter />
        <hr />
        <TaskTable />
      </React.Fragment>
    );
  }
}
