import React from 'react';
import db from './db.json';

import { Paper, TableContainer, Table, TableHead, TableRow, TableCell } from '@mui/material';

export default class TaskTable extends React.Component {
  constructor() {
    super();
  }
  render() {
    const rowStyle = { /* border: '1.5px solid silver',  */ padding: 4 };

    db.fiche.forEach((fiche) => {
      // console.log(fiche.numFiche);
    });

    const TableRows = [];
    const tabHeader = db.tableHeader.map((header, index) => {
      return <TableCell sx={{ fontSize: 11 }}>{header.value}</TableCell>;
    });

    return (
      <Paper sx={{ width: '100%' }}>
        <TableContainer>
          <Table stickyHeader aria-label='sticky table'>
            <TableHead>
              <TableRow>{tabHeader}</TableRow>
            </TableHead>
          </Table>
        </TableContainer>
      </Paper>
    );
  }
}
