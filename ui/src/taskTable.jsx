import React from 'react';
import taskTableCss from '../public/css/taskTable.css';

export default class TaskTable extends React.Component {
  render() {
    const rowStyle = { border: '1.5px solid silver', padding: 4 };
    return (
      <table className='taskTable'>
        <thead>
          <tr className='taskTable-header'>
            <th style={rowStyle} className='taskTable-header-row'>
              type de travail
            </th>
            <th style={rowStyle} className='taskTable-header-row'>
              booth number
            </th>
            <th style={rowStyle} className='taskTable-header-row'>
              status com
            </th>
            <th style={rowStyle} className='taskTable-header-row'>
              status ivpn
            </th>
            <th style={rowStyle} className='taskTable-header-row'>
              url fiche
            </th>
            <th style={rowStyle} className='taskTable-header-row'>
              état
            </th>
            <th style={rowStyle} className='taskTable-header-row'>
              nb avant
            </th>
            <th style={rowStyle} className='taskTable-header-row'>
              nb apres
            </th>
            <th style={rowStyle} className='taskTable-header-row'>
              date début
            </th>
            <th style={rowStyle} className='taskTable-header-row'>
              date validation
            </th>
            <th style={rowStyle} className='taskTable-header-row'>
              durée de production
            </th>
            <th style={rowStyle} className='taskTable-header-row'>
              productivité
            </th>
            <th style={rowStyle} className='taskTable-header-row'>
              Action
            </th>
          </tr>
        </thead>
      </table>
    );
  }
}
