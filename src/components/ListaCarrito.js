import React from 'react';
import './ListaCarrito.css';
import { useCarrito } from './CartContextProvider.js';
import ItemCarrito from './ItemCarrito';


const ListaCarrito = () => {
    const { carrito, dispatch } = useCarrito();
    const productos = carrito.productos;

    const subtotalCompra = productos.reduce((accum, prod) => accum + prod.item.price * prod.quantity, 0);
    const iva = subtotalCompra * 0.21;
    const totalCompra = iva + subtotalCompra;



    return (
        <div className='contenedorListaCarrito'>
            <div className='contenedorLista'>
                {productos.map((prod) => (<ItemCarrito key={prod.id} prod={prod} />))}
            </div>

            <div className='card-totales'>
                <span id='su-compra'>Su Compra: </span>
                <span>Subtotal: </span>
                <span className='dinero'>$ {subtotalCompra.toFixed(2)} </span>
                <span>IVA: </span>
                <span className='dinero'>$ {iva.toFixed(2)} </span>
                <span>TOTAL: </span>
                <span className='dinero'>$ {totalCompra.toFixed(2)} </span>

            </div>
        </div >
    );
};

export default ListaCarrito;
