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
    let countInf = ``;
    array.flat(Infinity).forEach((x) => {
      if (x == item) {
        counter++;
      }
    });
    if (counter < 10) {
      countInf = `0${counter}`;
      console.log(countInf);
      return countInf;
    } else {
      return counter;
    }
  };

  const normalState = itemCOunter(states, 'Normal');
  const sbyState = itemCOunter(states, 'Sby');
  const pafState = itemCOunter(states, 'Paf');
  const validState = itemCOunter(states, 'Valide');

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
        <StateBoard nbNorm={normalState} nbSby={sbyState} nbPaf={pafState} nbValid={validState} />
        <TaskFilter />
        <Box>
          <TaskTable />
        </Box>
      </Box>
    </React.Fragment>
  );
}
