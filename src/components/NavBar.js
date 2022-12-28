import React from 'react'
import CartWidget from './CartWidget'
import ItemNav from './ItemNav';
import logo from '../icono_1.png'

export default function NavBar() {
    const itemsNav = ["Productos", "Contactos"];
    

  return (
    <nav className='navbar navbar-light bg-light shadow-sm'>
        <div>
            <img className='w-25  ps-3' src={logo}></img>
            <span className='navbar-brand mb-2 ps-3 h1'>Panis Deus</span>
        </div>
        
        { itemsNav.map(element => {return <ItemNav key={element} nombre={element}/>})}
     
        <CartWidget />


    </nav>
  )
}
