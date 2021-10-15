import React from 'react';
import {
  Autocomplete,
  TextField,
  Box,
  Typography,
  Card,
  CardContent,
} from '@mui/material';

export default function TaskFilter(props) {
  const stateOptions = props.state;
  return (
    <Box>
      <Card>
        <CardContent>
          <Typography>Filtre</Typography>
          <Autocomplete
            disablePortal
            id='combo-box-state'
            options={stateOptions}
            renderInput={(params) => <TextField {...params} label='Status' />}
          />
        </CardContent>
      </Card>
    </Box>
  );
}
