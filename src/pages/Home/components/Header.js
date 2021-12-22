import react from 'react';
import { Button } from '@material-ui/core';
//import '../style.css';


function Header() {
  return (
    <header className='header'>
      <div className='toolbar'>
        <div>
          <span>NovaGas Conect</span>
        </div>
        <div className=''>
          <Button variant="contained" color='success'>Novo Pedido</Button>
          <span>img1</span>
          <span>img2</span>
        </div>
      </div>
    </header>
  )
}
export default Header;
