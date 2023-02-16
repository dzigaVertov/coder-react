import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CardProducto from './CardProducto';
import Contador from './Contador.js';
import { useCarrito, ACCIONES } from './CartContextProvider.js';
import { getDoc, doc, getFirestore } from 'firebase/firestore';





export default function ItemDetailContainer() {
    let productoid = useParams();


    const [item, setItem] = useState();
    const [numItems, setNumItems] = useState(0);
    let navigate = useNavigate();
    const { carrito, dispatch } = useCarrito();


    useEffect(() => {
        const db = getFirestore();
        const docref = doc(db, "items", productoid.id);
        getDoc(docref).then((snapshot) => {
            if (snapshot.exists()) {
                setItem({ id: snapshot.id, ...snapshot.data() });
            }
        });
    }, [productoid]);

    const onAdd = function (num) {        
        dispatch({ type: ACCIONES.AGREGAR_PRODUCTO, payload: { item: item, quantity: num } });
        setNumItems(num);
    };

    const onTerminarCompra = () => {
        navigate('/coder-react/cart');
    };

    return (
        <Container className='d-flex justify-content-center align-content-center align-items-center ' >
            {item && <CardProducto stock={item.stock} producto={item} ancho_max={'400px'} detalle={true} />}
            <div className='d-flex flex-column gap-3 '>
                <div style={{ textAlign: 'center', border: 'black solid 1px', borderRadius: '5px' }}>{`Disponibles: ${item ? item.stock : 0}`}</div>
                <Contador stock={item ? item.stock : 0} inicial={numItems} onAdd={onAdd} />
                <Button onClick={onTerminarCompra}>Teminar mi compra</Button>
            </div>
        </Container>
    );
}

