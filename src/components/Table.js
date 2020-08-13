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
import { FormControl, InputLabel, Input } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

class EmployeeTable extends React.Component {

    state = {
        search: ""
    }

    onChange = event => {
        this.setState({ search: event.target.value });
    };
    
    render() {
        const header = this.props.header;
        const employees = this.props.data;
        
        const filterSearch = employees.filter(result => {
           return result.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
        });

        return (
        <React.Fragment>
        <div style={{textAlign: "center"}}>
        <Typography component= {"span"}>    
        <FormControl style={{marginTop: 20}}>
        <InputLabel htmlFor="my-input">Search</InputLabel>
        <Input id="my-input" type="text" aria-describedby="my-helper-text" 
        value={this.state.search} onChange= {this.onChange.bind(this)} />
        </FormControl>
        </Typography>
        </div>
            
        <TableContainer component={Paper}>
        <Table aria-label="simple table" style={{backgroundColor: "#D0D3D9", marginTop: 10}}>
        <TableHead>
        {header.map((head) => (
          <TableRow key={head.id} className="header">
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
          {filterSearch.map((em) => (
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
    </React.Fragment>
        );
    }
}


export default EmployeeTable;