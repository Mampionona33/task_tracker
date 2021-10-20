import React from 'react';
import TaskTable from './taskTable.jsx';
import Header from '../Header.jsx';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import TaskFilter from './taskFilter.jsx';
import StateBoard from './StateBoard.jsx';
import db from '../../../api/db.json';

export default function TaskList() {
  const boothStates = db.fiches.map((item) => {
    return item.state;
  });
  const submitStates = db.fiches.map((items) => {
    return items.submiteState;
  });
  // console.log(boothStates);

  // Function to count item in array
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

  const normalState = itemCOunter(boothStates, 'Normal');
  const sbyState = itemCOunter(boothStates, 'Sby');
  const pafState = itemCOunter(boothStates, 'Paf');
  const submited = itemCOunter(submitStates, true);
  const unSubmited = itemCOunter(submitStates, false);

  const stateOption = db.etatFiche.map((item) => {
    return item.label;
  });

  // console.log(stateOption);

  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Box
        sx={{ backgroundColor: '#F5F5F5' }}
        display='flex'
        flexDirection='column'
        gap='2%'
        padding='0 5%'
        height='89vh'
      >
        <StateBoard
          nbNorm={normalState}
          nbSby={sbyState}
          nbPaf={pafState}
          nbValid={submited}
          nbNonValid={unSubmited}
        />
        <TaskFilter state={stateOption} />
        <Box>
          <TaskTable />
        </Box>
      </Box>
    </React.Fragment>
  );
}
