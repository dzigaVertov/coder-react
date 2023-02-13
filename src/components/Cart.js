import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useCarrito, ACCIONES } from './CartContextProvider.js';
import ListaCarrito from './ListaCarrito.js';
import './Cart.css';
import ModalDatos from './ModalDatos.js';

const Cart = () => {
    const { carrito, dispatch } = useCarrito();
    const [showModal, setShowModal] = useState(false);

    function vaciarCarrito() {
        dispatch({ type: ACCIONES.VACIAR_CARRITO });
    }

    function comprar() {
        setShowModal(true);
        
    }

    function enviar(datos) {
        setShowModal(false);
        console.log(datos);
    }

    function cancelar(){
        setShowModal(false);
    }

    return (
        <div className='carrito'>
            {carrito.productos.length ? <ListaCarrito /> : <h1>No hay productos en el carrito</h1>}
            <div className='botones'>
                <Button className='btn-lista' onClick={vaciarCarrito} disabled={!carrito.productos.length}>Vaciar Carrito</Button>
                <Button className='btn-lista' onClick={comprar} disabled={!carrito.productos.length}>Comprar</Button>
            </div>
          <ModalDatos show={showModal} onEnviar={enviar} onCancelar={cancelar} />

        </div>
    );
};

export default Cart;
