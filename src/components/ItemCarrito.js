import React from 'react';
import './ItemCarrito.css';
import { useCarrito, ACCIONES } from './CartContextProvider';
const ItemCarrito = (props) => {
    const prod = props.prod;
    const { carrito, dispatch } = useCarrito();
    function borrarItem() {
        dispatch({ type: ACCIONES.BORRAR_ITEM, payload: prod });
    }

    return (
        <div className='item'>

            <button className='btn-borrar' onClick={borrarItem}>X</button>

            <img className='img-lista-carrito' src={prod.item.image} />
            <div className='col titulo'>{prod.item.title}</div>
            <div className='col dinero'>{`$${prod.item.price}`}</div>
            <div className='col dinero'>{`${prod.quantity}`}</div>
            <div className='col dinero'>{`$${prod.item.price * prod.quantity}`}</div>
        </div>
    );
};

export default ItemCarrito;
