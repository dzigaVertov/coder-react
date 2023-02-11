import React from 'react';
import './ListaCarrito.css';
import { useCarrito } from './CartContextProvider.js';
import ItemCarrito from './ItemCarrito';


const ListaCarrito = (props) => {
    const { carrito, dispatch } = useCarrito();
    const productos = carrito.productos;

    return (
        <div className='contenedorCarrito'>
            <div className='contenedorLista'>
                {productos.map((prod) => (<ItemCarrito key={prod.id} prod={prod} />))}
            </div>

            <div className='card-totales'>
                <span>Su Compra: </span>
            <span>Subtotal: </span>
            <span>Subtotal: </span>
            <span>IVA: </span>
            <span>Subtotal: </span>
            <span>TOTAL: </span>
            <span>Subtotal: </span>

        </div>
        </div >
    );
};

export default ListaCarrito;
