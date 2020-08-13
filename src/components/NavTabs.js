import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  tableCol: {
    backgroundColor: "#0029FA",
  },
}));

function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.tableCol}>
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Employee Directory
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;