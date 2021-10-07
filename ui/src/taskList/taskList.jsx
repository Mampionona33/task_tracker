import React from 'react';
import TaskTable from './taskTable.jsx';
import Header from '../Header.jsx';

export default function TaskList() {
  return (
    <div>
    <Header/>
      <TaskTable />
    </div>
  );
}
