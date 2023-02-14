import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useCarrito, ACCIONES } from './CartContextProvider.js';
import ListaCarrito from './ListaCarrito.js';
import './Cart.css';
import ModalDatos from './ModalDatos.js';
import { addDoc, getFirestore, collection, serverTimestamp } from 'firebase/firestore';

const Cart = () => {
    const { carrito, dispatch } = useCarrito();
    const [showModalDatos, setShowModalDatos] = useState(false);
    const [showModalFinal, setShowModalFinal] = useState(false);


    return (
        <div className='carrito'>
            {carrito.productos.length ? <ListaCarrito /> : <h1>No hay productos en el carrito</h1>}
            <div className='botones'>
                <Button className='btn-lista' onClick={vaciarCarrito} disabled={!carrito.productos.length}>Vaciar Carrito</Button>
                <Button className='btn-lista' onClick={comprar} disabled={!carrito.productos.length}>Comprar</Button>
            </div>
            <ModalDatos show={showModalDatos} onEnviar={enviar} onCancelar={cancelar} />

        </div>
    );

    function armarCompra(datosComprador) {
        const productos = carrito.productos.map(prod => {
            return {
                id: prod.id,
                price: prod.price,
                title: prod.title,
                quantity: prod.quantity
            };
        });
        const total = carrito.totalCompra() + carrito.ivaCompra();
        const date = serverTimestamp();

        return { comprador: datosComprador, productos, total, date };
    }

    function guardarCompraDb(datosCompra){
        const db = getFirestore();
        const comprasCollection = collection(db, 'compras');
        return addDoc(comprasCollection);        
    }

    function vaciarCarrito() {
        dispatch({ type: ACCIONES.VACIAR_CARRITO });
    }

    function comprar() {
        setShowModalDatos(true);
    }

    function enviar(datos) {
        setShowModalDatos(false);
        const datosCompra = armarCompra(datos);
        guardarCompraDb(datosCompra).then(docRef => finalCompra(docRef));
    }

    function cancelar() {
        setShowModalDatos(false);
    }

    

};

export default Cart;
