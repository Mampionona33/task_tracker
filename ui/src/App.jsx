import TaskAdd from './TaskAdd.jsx';
import TaskFilter from './taskFilter.jsx';
import TaskTable from './taskTable.jsx';
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
