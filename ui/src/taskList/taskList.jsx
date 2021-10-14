import React from 'react';
import TaskTable from './taskTable.jsx';
import Header from '../Header.jsx';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import TaskFilter from './taskFilter.jsx';
import StateBoard from './StateBoard.jsx';
import db from '../db.json';

export default function TaskList() {
  const states = [];
  const stateConst = db.fiche.map((fiche) => {
    states.push(fiche.state);
  });

  const itemCOunter = (array, item) => {
    let counter = 0;
    array.flat(Infinity).forEach((x) => {
      if (x == item) {
        counter++;
      }
    });
    console.log(counter);
    return counter;
  };

  const normalState = itemCOunter(states, 'Normal');

  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Box
        sx={{ backgroundColor: '#F5F5F5' }}
        display='flex'
        flexDirection='column'
        gap='5%'
        padding='0 5%'
        height='89vh'
      >
        <StateBoard nbNorm={normalState}/>
        <TaskFilter />
        <Box>
          <TaskTable />
        </Box>
      </Box>
    </React.Fragment>
  );
}
