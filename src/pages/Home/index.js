import React from 'react';
//import style from './style.css'
import Header from './components/Header';
import { makeStyles } from '@material-ui/core/styles';
import Feed from './components/Feed';
import NavBar from './components/NavBar';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    height: '100vh',
    padding: 24
  },
  toolbar: {
    minHeight: '64px'
  },

})

function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.toolbar}></div>
      <main className={classes.main}>
        <Container maxWidth='lg'>
          <Box>
            <NavBar />
            <Feed />
          </Box>
        </Container>
      </main>
    </div>
  )
} export default Home;