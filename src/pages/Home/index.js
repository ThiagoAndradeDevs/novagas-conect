import React from 'react';
import style from './style.css'
import components from './components/Header';
import Header from './components/Header';

function Home() {
  return (
    <div>
      <Header />
      <main className='main'>
        <div className='navbar'>navbar</div>
        <div className='feed'>feed</div>
      </main>
    </div>
  )
} export default Home;