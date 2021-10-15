import React from 'react';
import { Card, Divider, Box, CardContent, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import WorkIcon from '@mui/icons-material/Work';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ModeStandbyIcon from '@mui/icons-material/ModeStandby';
import StopScreenShareIcon from '@mui/icons-material/StopScreenShare';

const useStyles = makeStyles({
  m02: {
    margin: '1.5rem',
    minWidth: '200px',
  },
  cardTitle: {
    fontSize: '0.8rem',
    fontWeight: 'bold',
    color: '#505050',
  },
  cardTitleBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardBodyText: {
    fontSize: '1.2rem',
    fontWeight: '750',
  },
});

export default function StateBoard(props) {
  const classes = useStyles();
  const nbNorm = props.nbNorm;
  const nbSby = props.nbSby;
  const nbPaf = props.nbPaf;
  const nbValid = props.nbValid;
  return (
    <Box display='flex' flexDirection='row' justifyContent='center' flexWrap='wrap'>
      <Card className={classes.m02}>
        <CardContent>
          <Box className={classes.cardTitleBox}>
            <Typography className={classes.cardTitle}>
              Nb Fiche Normal
            </Typography>
            <WorkIcon sx={{ color: '#2471A3' }} />
          </Box>
          <Divider />
          <Typography className={classes.cardBodyText}>{nbNorm}</Typography>
        </CardContent>
      </Card>

      <Card className={classes.m02}>
        <CardContent>
          <Box className={classes.cardTitleBox}>
            <Typography className={classes.cardTitle}>
              Nb Fiche Valider
            </Typography>
            <CheckCircleIcon sx={{ color: '#28B463' }} />
          </Box>
          <Divider />
          <Typography className={classes.cardBodyText}>{nbValid}</Typography>
        </CardContent>
      </Card>

      <Card className={classes.m02}>
        <CardContent>
          <Box className={classes.cardTitleBox}>
            <Typography className={classes.cardTitle}>
              Nb Fiche Stdby
            </Typography>
            <ModeStandbyIcon sx={{ color: '#BA4A00' }} />
          </Box>
          <Divider />
          <Typography className={classes.cardBodyText}>{nbSby}</Typography>
        </CardContent>
      </Card>

      <Card className={classes.m02}>
        <CardContent>
          <Box className={classes.cardTitleBox}>
            <Typography className={classes.cardTitle}>Nb Fiche Paf</Typography>
            <StopScreenShareIcon sx={{ color: '#1B2631' }} />
          </Box>
          <Divider />
          <Typography className={classes.cardBodyText}>{nbPaf}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
