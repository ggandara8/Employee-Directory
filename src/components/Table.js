import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';


class EmployeeTable extends React.Component {

    employeeNames = () => {
        const dataNames = this.props.data[0].name;
        console.log(dataNames);
    }

    render() {
        const data = this.props.data;
        return (
            <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">
            <Button onClick= {this.employeeNames}>Name</Button>
            </TableCell>
            <TableCell align="center">Phone</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">YOB</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((em) => (
            <TableRow>
              <TableCell align="center">{em.name}</TableCell>
              <TableCell align="center">{em.phone}</TableCell>
              <TableCell align="center">{em.email}</TableCell>
              <TableCell align="center">{em.year}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        );
    }
}


export default EmployeeTable;