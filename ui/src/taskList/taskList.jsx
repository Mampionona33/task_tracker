import React from 'react';
import TaskTable from './taskTable.jsx';
import Header from '../Header.jsx';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import TaskFilter from './taskFilter.jsx';
import StateBoard from './StateBoard.jsx';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  col60: {
    overflow: 'hidden',
    maxWidth: '60px',
  },
});

export default function TaskList() {
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
        <StateBoard />
        <TaskFilter />
        <Box>
          <TaskTable />
        </Box>
      </Box>
    </React.Fragment>
  );
}
