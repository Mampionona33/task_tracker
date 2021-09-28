import React from 'react';
import taskTableCss from '../public/css/taskTable.css';

export default class TaskTable extends React.Component {
  render() {
    const rowStyle = { /* border: '1.5px solid silver',  */ padding: 4 };
    return (
      <table className='taskTable'>
        <thead>
          <tr className='taskTable-header'>
            <th className='taskTable-header-row'>Type de Trav</th>
            <th className='taskTable-header-row'>Booth Number</th>
            <th style={rowStyle} className='taskTable-header-row'>
              Status Com
            </th>
            <th className='taskTable-header-row'>Status IVPN</th>
            <th className='taskTable-header-row'>Url</th>
            <th className='taskTable-header-row'>State</th>
            <th style={rowStyle} className='taskTable-header-row'>
              Nb Before
            </th>
            <th style={rowStyle} className='taskTable-header-row'>
              Nb After
            </th>
            <th style={rowStyle} className='taskTable-header-row'>
              Starting Date
            </th>
            <th style={rowStyle} className='taskTable-header-row'>
              Validation Date
            </th>
            <th style={rowStyle} className='taskTable-header-row'>
              Duration
            </th>
            <th style={rowStyle} className='taskTable-header-row'>
              Productivity
            </th>
            <th style={rowStyle} className='taskTable-header-row'>
              Actions
            </th>
          </tr>
        </thead>
      </table>
    );
  }
}
