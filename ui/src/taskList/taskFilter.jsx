import React from 'react';
import {
  Autocomplete,
  TextField,
  Box,
  Typography,
  Card,
  CardContent,
} from '@mui/material';
import { Switch } from '@mui/material';

export default function TaskFilter(props) {
  const stateOptions = props.state;
  return (
    <Box>
      <Card>
        <CardContent>
          <Box
            display='flex'
            flexDirection='column'
            justifyContent='flex-start'
          >
            <Typography>Filtre</Typography>

            <Box
              display='flex'
              flexDirection='row'
              justifyContent='flex-start'
              gap='5%'
            >
              <Box display='flex' flexDirection='row'>
                <Typography>En cours</Typography>
                <Switch size='small' />
                <Typography>Valider</Typography>
              </Box>
              <Autocomplete
                sx={{ minWidth: 'max-content', width: '200px' }}
                size='small'
                disablePortal
                id='combo-box-state'
                options={stateOptions}
                renderInput={(params) => (
                  <TextField {...params} label='Status' />
                )}
              />
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
