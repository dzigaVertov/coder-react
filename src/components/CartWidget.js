import React from 'react';
import { Link } from 'react-router-dom';

import { useCarrito } from './CartContextProvider.js';


export default function CartWidget() {
    const {carrito, dispatch} = useCarrito();

    const numTotalItems = carrito.productos.reduce((accum, prod)=>{return accum + prod.quantity}, 0);

    

    return (
        <Link to='/cart'>
        <div className='pe-4 d-flex gap-1 align-items-start'>
            <i className='bi bi-cart h1'></i>
          <p>{numTotalItems || 0}</p>
        </div>
        </Link>
    );
}
