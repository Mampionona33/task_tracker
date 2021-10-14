import React from 'react';
import TaskTable from './taskTable.jsx';
import Header from '../Header.jsx';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import TaskFilter from './taskFilter.jsx';

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
        padding='5%'
        height='89vh'
      >
        <TaskFilter />
        <Box>
          <TaskTable />
        </Box>
      </Box>
    </React.Fragment>
  );
}
