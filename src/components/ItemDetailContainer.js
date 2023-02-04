import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CardProducto from './CardProducto';
import Contador from './Contador.js';






export default function ItemDetailContainer() {
    let productoid = useParams();

    const [item, setItem] = useState();
    const stock = 10; 		// provisorio hasta db
    let navigate = useNavigate();


    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${productoid.id}`)
            .then(resp => resp.json())
            .then(respJson => setItem(respJson));
    }, [productoid]);

    const onAdd = function () {
        console.log('onadding');

    };

    const onTerminarCompra = () => {
        navigate('/cart');
    };



    return (
        <Container className='d-flex justify-content-center align-content-center align-items-center ' >
            {item && <CardProducto stock={stock} producto={item} ancho_max={'400px'} detalle={true} />}
          <div className='d-flex flex-column gap-3 '>
            <div style={{textAlign:'center', border: 'black solid 1px', borderRadius:'5px'}}>{`Disponibles: ${stock}`}</div>
                <Contador stock={stock} inicial={0} onAdd={onAdd} />
                <Button onClick={onTerminarCompra}>Teminar mi compra</Button>
            </div>
        </Container>
    );
}

