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
  TablePagination,
} from '@mui/material';

export default class TaskTable extends React.Component {
  constructor() {
    super();
    this.state = {
      rowsPerPage: 3,
      page: 0,
    };
    this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);
    this.handleChangePage = this.handleChangePage.bind(this);
  }

  handleChangeRowsPerPage(event) {
    this.setState({ rowsPerPage: parseInt(event.target.value), page: 0 });
  }

  handleChangePage(event, newPage) {
    this.setState({ page: newPage });
  }

  render() {
    const tabHeader = db.tableHeader.map((header, index) => {
      return <TableCell key={index}>{header.value}</TableCell>;
    });

    const TRows = db.fiche.map((fiche) => {
      return <TableRows key={fiche._id} fiche={fiche} />;
    });
    return (
      <Paper>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>{tabHeader}</TableRow>
            </TableHead>
            <TableBody>
              {TRows.slice(
                this.state.page * this.state.rowsPerPage,
                this.state.page * this.state.rowsPerPage +
                  this.state.rowsPerPage
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[3, 4]}
          component='div'
          count={TRows.length}
          rowsPerPage={this.state.rowsPerPage}
          page={this.state.page}
          onRowsPerPageChange={this.handleChangeRowsPerPage}
          onPageChange={this.handleChangePage}
        />
      </Paper>
    );
  }
}
