import React from 'react';
import { Card, Divider, Box, CardContent, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import WorkIcon from '@mui/icons-material/Work';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ModeStandbyIcon from '@mui/icons-material/ModeStandby';
import StopScreenShareIcon from '@mui/icons-material/StopScreenShare';
import BarChartIcon from '@mui/icons-material/BarChart';

const useStyles = makeStyles({
  m02: {
    margin: '0.7rem',
    minWidth: '175px',
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
  cardIcons: {
    margin: '0 0 0 1rem',
  },
});

export default function StateBoard(props) {
  const classes = useStyles();
  const nbNorm = props.nbNorm;
  const nbSby = props.nbSby;
  const nbPaf = props.nbPaf;
  const nbValid = props.nbValid;
  const nbNonValid = props.nbNonValid;
  return (
    <Box
      display='flex'
      flexDirection='row'
      justifyContent='center'
      flexWrap='wrap'
    >
      <Card className={classes.m02}>
        <CardContent>
          <Box className={classes.cardTitleBox}>
            <Typography className={classes.cardTitle}>
              Nb Fiche Normal
            </Typography>
            <WorkIcon sx={{ color: '#2471A3' }} className={classes.cardIcons} />
          </Box>
          <Divider />
          <Typography className={classes.cardBodyText}>{nbNorm}</Typography>
        </CardContent>
      </Card>

      <Card className={classes.m02}>
        <CardContent>
          <Box className={classes.cardTitleBox}>
            <Typography className={classes.cardTitle}>
              Nb Fiche Stdby
            </Typography>
            <ModeStandbyIcon
              sx={{ color: '#BA4A00' }}
              className={classes.cardIcons}
            />
          </Box>
          <Divider />
          <Typography className={classes.cardBodyText}>{nbSby}</Typography>
        </CardContent>
      </Card>

      <Card className={classes.m02}>
        <CardContent>
          <Box className={classes.cardTitleBox}>
            <Typography className={classes.cardTitle}>Nb Fiche Paf</Typography>
            <StopScreenShareIcon
              sx={{ color: '#1B2631' }}
              className={classes.cardIcons}
            />
          </Box>
          <Divider />
          <Typography className={classes.cardBodyText}>{nbPaf}</Typography>
        </CardContent>
      </Card>

      <Card className={classes.m02}>
        <CardContent>
          <Box className={classes.cardTitleBox}>
            <Typography className={classes.cardTitle}>
              Nb Total Fiche En cours
            </Typography>
            <BarChartIcon
              sx={{ color: '#28B463' }}
              className={classes.cardIcons}
            />
          </Box>
          <Divider />
          <Typography className={classes.cardBodyText}>{nbNonValid}</Typography>
        </CardContent>
      </Card>

      <Card className={classes.m02}>
        <CardContent>
          <Box className={classes.cardTitleBox}>
            <Typography className={classes.cardTitle}>
              Nb Total Fiche Valider
            </Typography>
            <CheckCircleIcon
              sx={{ color: '#AF7AC5' }}
              className={classes.cardIcons}
            />
          </Box>
          <Divider />
          <Typography className={classes.cardBodyText}>{nbValid}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
