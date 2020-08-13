import React from "react";
import { FormControl, InputLabel, Input } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

class Search extends React.Component {


    render() {
        return (
            <Typography align="center">    
            <FormControl style={{marginTop: 20}}>
            <InputLabel htmlFor="my-input">Search</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            </Typography>
           );
    }
}

export default Search;