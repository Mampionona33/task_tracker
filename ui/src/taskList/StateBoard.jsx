import React from 'react';
import { Paper, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  m02: {
    margin: '1.5rem',
  },
});

export default function StateBoard(props) {
  const classes = useStyles();
  const nbNorm = props.nbNorm;
  return (
    <Box display='flex' flexDirection='row' justifyContent='center'>
      <Paper className={classes.m02}>Fiche Normal : {nbNorm}</Paper>
      <Paper className={classes.m02}>Fiche valider</Paper>
      <Paper className={classes.m02}>Fiche Stdby</Paper>
      <Paper className={classes.m02}>Fiche Paf</Paper>
    </Box>
  );
}
