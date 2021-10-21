import React from 'react';

import { Box, Typography, Link, IconButton } from '@mui/material';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';

export default function HomeTitle(props) {
  return (
    <React.Fragment>
      <Typography m={'0 1rem'}>Fiche</Typography>
      <Box display='flex' flexDirection='row' alignItems='center'>
        <Link href='/new'>
          <Typography>+ NOUVELLE TACHE</Typography>
        </Link>
        <IconButton href='/pause'>
          <PauseCircleIcon />
        </IconButton>
      </Box>
    </React.Fragment>
  );
}
