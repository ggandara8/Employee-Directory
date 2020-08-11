import React from "react";
import { FormControl, InputLabel, Input } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    inputForm: {
        marginTop: theme.spacing(3)
    },
}));

function SearchForm(){
  const classes = useStyles();
   return (
    <Typography align="center">    
    <FormControl className={classes.inputForm}>
    <InputLabel htmlFor="my-input">Search</InputLabel>
    <Input id="my-input" aria-describedby="my-helper-text" />
    </FormControl>
    </Typography>
   );
}

export default SearchForm;