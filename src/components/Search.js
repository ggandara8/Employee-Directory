import React from "react";
import { FormControl, InputLabel, Input } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

class SearchLine extends React.Component {
    state = {
        search: ""
    }

    // handleInputChange = event => {
    //     let searchForm = this.setState({ search: event.target.value });
    //     console.log(searchForm);
    // };

    render() {
        return (
            <div style={{textAlign: "center"}}>
            <Typography component= {"span"}>    
            <FormControl style={{marginTop: 20}}>
            <InputLabel htmlFor="my-input">Search</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            </Typography>
            </div>
           );
    }
}

export default SearchLine;