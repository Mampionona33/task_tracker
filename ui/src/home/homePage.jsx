import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';

import Formulaire from './formulaire.jsx';
import Header from '../Header.jsx';
import ProdShow from './ProdShow.jsx';
import SimulProdShow from './SimulProdShow.jsx';

export default class HomePage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Header />
        <Box
          sx={{ backgroundColor: '#F5F5F5' }}
          display='grid'
          justifyItems='center'
          gridTemplateColumns='repeat(auto-fit, minmax(400px, 1fr))'
          flexDirection='row'
          justifyContent='space-between'
          padding='2rem 0'
          height='89vh'
        >
          <Box margin='1rem'>
            <Formulaire />
          </Box>
          <Box margin='1rem'>
            <ProdShow />
          </Box>
          <Box margin='1rem'>
            <SimulProdShow />
          </Box>
        </Box>
      </React.Fragment>
    );
  }
}
