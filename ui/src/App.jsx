class TaskAdd extends React.Component {
  render() {
    return <div>this is a placeholder for adding new task</div>;
  }
}
class TaskFilter extends React.Component {
  render() {
    return <div>this is a placeholder for filtering tasks</div>;
  }
}
class TaskTable extends React.Component {
  render() {
    return <div>this is a placeholder for presenting a table containing the list of task.</div>;
  }
}
class TaskList extends React.Component {
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

const element = <TaskList />;

ReactDOM.render(element, document.getElementById('root'));
