import React from 'react';
//import style from './style.css'
import Header from './components/Header';
import { makeStyles } from '@material-ui/core/styles';
import Feed from './components/Feed';
import NavBar from './components/NavBar';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    height: '100vh',
    display: 'flex',
    width: '1280px',
    margin: '0 auto'
  },
  toolbar: {
    minHeight: '64px'
  }
})

function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.toolbar}></div>
      <main className={classes.main}>
        <NavBar />
        <Feed />
      </main>
    </div>
  )
} export default Home;