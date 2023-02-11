import React from 'react';
import { Link } from 'react-router-dom';

import { useCarrito } from './CartContextProvider.js';


export default function CartWidget() {
    const {carrito, dispatch} = useCarrito();

    return (
        <Link to='/cart'>
        <div className='pe-4 d-flex gap-1 align-items-start'>
            <i className='bi bi-cart h1'></i>
          <p>{carrito.productos.length}</p>
        </div>
        </Link>
    );
}
