import React from 'react';
import CartWidget from './CartWidget';
import ItemNav from './ItemNav';
import logo from '../icono_1.png';
import {Link} from 'react-router-dom';

export default function NavBar() {
  const itemsNav = [{nombre: "Productos", to: '/productos'}, {nombre: "Contactos", to: '/contacto'}];
  const linksNav = itemsNav.map((item) => <ItemNav key={item.nombre} nombre={item.nombre} to={item.to} />);
  

  return (
    <nav className='navbar navbar-light bg-light shadow-sm'>
        <div>
            <Link to='/'>
              <img className='w-25  ps-3' src={logo}></img>
            </Link>
            <span className='navbar-brand mb-2 ps-3 h1'>Panis Deus</span>
        </div>

        {linksNav}      
        
     
        <CartWidget />


    </nav>
  );
}
