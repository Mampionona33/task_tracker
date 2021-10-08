import React from 'react';
import { TableRow, TableCell } from '@mui/material';

export default function TableRows(props) {
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
  const index = props.index;
  return (
    <TableRow key={index}>
      <TableCell className='taskTable-body-data'> {typeTrav}</TableCell>
      <TableCell className='taskTable-body-data'>{numFiche}</TableCell>
      <TableCell className='taskTable-body-data'>{statuCom}</TableCell>
      <TableCell className='taskTable-body-data'>{statuIvpn}</TableCell>
      <TableCell className='taskTable-body-data' sx={{ overflow: 'auto' }}>
        {url}
      </TableCell>
      <TableCell className='taskTable-body-data'>{state}</TableCell>
      <TableCell className='taskTable-body-data'>{nbBefor}</TableCell>
      <TableCell className='taskTable-body-data'>{nbAft}</TableCell>
      <TableCell className='taskTable-body-data'>{startDate}</TableCell>
      <TableCell className='taskTable-body-data'>{validDate}</TableCell>
      <TableCell className='taskTable-body-data'>{duree}</TableCell>
      <TableCell className='taskTable-body-data'>{productivity}</TableCell>
    </TableRow>
  );
}
