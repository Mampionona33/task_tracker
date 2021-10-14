import React from 'react';
import { TableRow, TableCell, Button, Link, ButtonGroup } from '@mui/material';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  col60: {
    overflow: 'hidden',
    maxWidth: '60px',
  },
});

export default function TableRows(props) {
  const classes = useStyles();

  const _id = props.fiche._id;
  const typeTrav = props.fiche.typeTrav;
  const numFiche = props.fiche.numFiche;
  const statuCom = props.fiche.statuCom;
  const statuIvpn = props.fiche.statuIvpn;
  const url = props.fiche.url;
  const state = props.fiche.state;
  const nbBefor = props.fiche.nbBefor;
  const nbAft = props.fiche.nbAft;
  const startDate = props.fiche.startDate;
  const validDate = props.fiche.validDate;
  const duree = props.fiche.duree;
  const productivity = props.fiche.productivity;

  return (
    <TableRow key={_id}>
      <TableCell className='taskTable-body-data'>{typeTrav}</TableCell>
      <TableCell className='taskTable-body-data'>{numFiche}</TableCell>
      <TableCell className='taskTable-body-data'>{statuCom}</TableCell>
      <TableCell className='taskTable-body-data'>{statuIvpn}</TableCell>
      <TableCell className={classes.col60}>
        <Link rel='noopener' href={url} target='_blank'>
          {url}
        </Link>
      </TableCell>
      <TableCell className='taskTable-body-data'>{state}</TableCell>
      <TableCell className='taskTable-body-data'>{nbBefor}</TableCell>
      <TableCell className='taskTable-body-data'>{nbAft}</TableCell>
      <TableCell className='taskTable-body-data'>{startDate}</TableCell>
      <TableCell className='taskTable-body-data'>{validDate}</TableCell>
      <TableCell className='taskTable-body-data'>{duree}</TableCell>
      <TableCell className='taskTable-body-data'>{productivity}</TableCell>
      <TableCell className='taskTable-body-data'>
        <ButtonGroup variant='text'>
          <Button href='#'>
            <PlayCircleFilledIcon />
          </Button>
          <Button>
            <ModeEditIcon />
          </Button>
        </ButtonGroup>
      </TableCell>
    </TableRow>
  );
}
