/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { Button } from '@material-ui/core';
//import '../style.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SvgIcon from '@material-ui/core/SvgIcon';
import { Bell } from 'react-feather';

const useStyles = makeStyles({
  appBar: {
    boxShadow: 'none'
  },
  img: {
    maxHeight: 150,
  }

})

function Header() {
  const classes = useStyles();
  return (
    <AppBar position='fixed' color='inherit' className={classes.appBar}>
      <Toolbar>
        <img src="/images/logonovagas.png" alt="logonovagas" className={classes.img} />
        <div>
          <Button variant="contained" color='primary'>
            Novo Pedido
          </Button>
          <SvgIcon>
            <Bell></Bell>
          </SvgIcon>
        </div>

        {/* <div>
          <a href="/">NovaGas Conect</a >

        </div>
        <div className=''>
          <Button variant="contained" color='primary'>Novo Pedido</Button>
          <input type='text' />
          <span>img1</span>
          <span>img2</span>
       </div>*/}
      </Toolbar>
    </AppBar>
  )
}
export default Header;
