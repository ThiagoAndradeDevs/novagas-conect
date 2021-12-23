import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    width: 375,
    textAlign: 'center'
  },
  button: {
    width: '100%'
  }
}));
const tags = [
  { id: 1, name: ' Entrega Rapida ' },
  { id: 2, name: ' Qualidade' },
  { id: 3, name: ' Preço Justo ' },
  { id: 4, name: ' Tradição ' },
  { id: 5, name: ' 25 Anos em Marilia ' },
  { id: 6, name: ' 3417 3322 ' },
  { id: 6, name: ' 99674 4768 ' },
]

function NavBar() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      Nova Gas Conect
      <div> <Button
        variant='outlined'
        color='primary'
        className={classes.button}>
        Entrega Gratis
      </Button>
        <ListSubheader>{`Supergasbras - SHV`}</ListSubheader>
        {
          tags.map((item) => (
            <ListItem>
              <ListItemText primary={`#${item.name}`}></ListItemText>
            </ListItem>
          ))
        }
      </div>
    </Paper>
  )
}
export default NavBar;