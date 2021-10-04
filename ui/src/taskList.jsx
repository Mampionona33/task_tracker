import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, FormControl, Grid, TextField, InputLabel, Select, MenuItem, Paper, Button, Stack } from '@mui/material';

import Formulaire from './formulaire.jsx';
import TaskFilter from './taskFilter.jsx';
import TaskTable from './taskTable.jsx';
import Header from './Header.jsx';
import ProdShow from './ProdShow.jsx';
import SimulProdShow from './SimulProdShow.jsx';

export default class TaskList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Header />
        <Box display='grid' flexDirection='row' justifyContent='space-between' padding={(0, 5, 0, 5)}>
          <Box gridColumn={1}>
            <Formulaire />
          </Box>
          <Box gridColumn={2} padding={(0, 5, 0, 5)}>
            <ProdShow />
          </Box>
          <Box gridColumn={3} padding={(0, 5, 50, 5)}>
            <SimulProdShow />
          </Box>
          {/* <Box display='flex' flexDirection='column' padding={4} overflow='hidden'>
            <TaskFilter />
            <TaskTable />
          </Box> */}
        </Box>
      </React.Fragment>
    );
  }
}
