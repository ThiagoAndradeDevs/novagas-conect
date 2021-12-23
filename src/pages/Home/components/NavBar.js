import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { colors } from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    padding: 16,
    width: 375
  }
})

function NavBar() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      Nova Gas Conect
    </Paper>
  )
}
export default NavBar;