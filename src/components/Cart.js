import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCarrito, ACCIONES } from './CartContextProvider.js';
import ListaCarrito from './ListaCarrito.js';
import './Cart.css';
import ModalDatos from './ModalDatos.js';
import { addDoc, getFirestore, collection, serverTimestamp } from 'firebase/firestore';
import ModalFinalCompra from './ModalFinalCompra.js';

const Cart = () => {
    const { carrito, dispatch } = useCarrito();
    const [showModalDatos, setShowModalDatos] = useState(false);
    const [showModalFinal, setShowModalFinal] = useState(false);
    const [idCompra, setIdCompra] = useState('');
    let navigate = useNavigate();


    return (
        <div className='carrito'>
            {(carrito.productos && carrito.productos.length) ? <ListaCarrito /> : <h1>No hay productos en el carrito</h1>}
            <div className='botones'>
                {carrito.productos && <Button className='btn-lista' onClick={vaciarCarrito} disabled={!carrito.productos.length}>Vaciar Carrito</Button>}
                {carrito.productos && <Button className='btn-lista' onClick={comprar} disabled={!carrito.productos.length}>Comprar</Button>}
            </div>
            <ModalDatos show={showModalDatos} onEnviar={enviar} onCancelar={cancelar} />
            <ModalFinalCompra show={showModalFinal} idCompra={idCompra} finalizar={finalizarCompra} />

        </div>
    );

    function armarCompra(datosComprador) {
        const productos = carrito.productos.map(prod => {
            return {
                id: prod.id,
                price: prod.item.price,
                title: prod.item.title,
                quantity: prod.quantity
            };
        });
        const total = (carrito.totalCompra() + carrito.ivaCompra()).toFixed(2);
        const date = serverTimestamp();

        return { comprador: datosComprador, productos, total, date };
    }

    function guardarCompraDb(datosCompra) {
        const db = getFirestore();
        const comprasCollection = collection(db, 'compras');
        return addDoc(comprasCollection, datosCompra);
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
        guardarCompraDb(datosCompra).then(docRef => confirmarCompra(docRef));
    }

    function cancelar() {
        setShowModalDatos(false);
    }

    function confirmarCompra(docRef) {
        setIdCompra(docRef.id);
        setShowModalFinal(true);
    }

    function finalizarCompra() {
        setShowModalFinal(false);
        vaciarCarrito();
        navigate('/');
    }





};

export default Cart;
