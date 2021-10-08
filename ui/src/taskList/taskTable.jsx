import React from 'react';
import db from '../db.json';
import TableRows from './TableRows.jsx';
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';

export default class TaskTable extends React.Component {
  constructor() {
    super();
  }
  render() {
    const rowStyle = { /* border: '1.5px solid silver',  */ padding: 4 };

    db.fiche.forEach((fiche) => {
      // console.log(fiche.numFiche);
    });

    const tabHeader = db.tableHeader.map((header, index) => {
      return <TableCell>{header.value}</TableCell>;
    });

    const TRows = db.fiche.map((fiche, index) => {
      return <TableRows key={index} fiche={fiche} />;
    });

    return (
      <TableContainer component={Paper}>
        <Table style={{ tableLayout: 'fixed' }}>
          <TableHead>
            <TableRow>{tabHeader}</TableRow>
          </TableHead>
          <TableBody>{TRows}</TableBody>
        </Table>
      </TableContainer>
    );
  }
}
