import React from 'react';
import { AppBar, Box, Toolbar, IconButton, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ListIcon from '@mui/icons-material/List';

export default function Header(props) {
  return (
    <Box>
      <AppBar position='static'>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <IconButton size='large' edge='start' color='inherit' aria-label='menu' sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Button startIcon={<ListIcon />} variant='filed' sx={{ backgroundColor: 'rgba(3, 90, 220, 0.9)' }}>
            Mes tâches
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
