import React from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

class EmployeeTable extends React.Component {
    
    render() {
        const data = this.props.data;
        const header = this.props.header;
        return (
      <TableContainer component={Paper}>
      <Table aria-label="simple table" style={{backgroundColor: "#D0D3D9", marginTop: 10}}>
        <TableHead>
        {header.map((head) => (
          <TableRow key={head.id}>
            <TableCell align="center">
            <Button onClick={() => this.props.handleSort(head.prop)}><span>{head.name}</span>
              {this.props.columnToSort === head.prop ? (
                this.props.sortDirection === "asc" ? (
                  <ArrowUpwardIcon />
                ) : (
                  <ArrowDownwardIcon />
                )
              ) : null}</Button>
            </TableCell>
            <TableCell align="center">{head.phone}</TableCell>
            <TableCell align="center">{head.email}</TableCell>
            <TableCell align="center">{head.year}</TableCell>
          </TableRow>
        ))}
        </TableHead>
        <TableBody>
          {data.map((em) => (
            <TableRow key={em.id}>
              <TableCell align="center" >{em.name}</TableCell>
              <TableCell align="center" >{em.phone}</TableCell>
              <TableCell align="center" >{em.email}</TableCell>
              <TableCell align="center" >{em.year}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        );
    }
}


export default EmployeeTable;