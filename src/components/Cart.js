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
          <ListaCarrito/>
            <Button onClick={vaciarCarrito}>Vaciar Carrito</Button>

        </div>
    );
};

export default Cart;
