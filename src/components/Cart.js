import React from 'react';
import { Button } from 'react-bootstrap';
import { useCarrito, ACCIONES } from './CartContextProvider.js';
import ListaCarrito from './ListaCarrito.js';

const Cart = (props) => {
    const { carrito, dispatch } = useCarrito();

    function vaciarCarrito() {
        dispatch({type: ACCIONES.VACIAR_CARRITO});
    }

    return (
        <div>
          {carrito.productos.length ? <ListaCarrito/> : <h1>No hay productos en el carrito</h1>}
          <Button onClick={vaciarCarrito} disabled={!carrito.productos.length}>Vaciar Carrito</Button>
        </div>
    );
};

export default Cart;
