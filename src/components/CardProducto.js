import React from 'react';
import { Card, ListGroup, Button } from 'react-bootstrap';
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function CardProducto(props) {
    const producto = props.producto;
    const stock = props.stock;

    const ancho_max = props.ancho_max;
    const maxHeightPosible = 500;
    const maxHeight = 100;


    const texto = useRef();
    const [mostrarExpandir, setMostrarExpandir] = useState(false);
    const [expandido, setExpandido] = useState(true);

    useEffect(() => {
        if (texto.current.scrollHeight > maxHeight) {
            setMostrarExpandir(true);
            setExpandido(false);
        }
    }, [maxHeight]);



    return (
        <Card className='m-4' style={{ maxWidth: ancho_max }} key={producto.id + producto.title} >
            <Card.Img variant='top' src={producto.image} />
            <Card.Body>
                <Card.Title>{producto.Title}</Card.Title>
                <Card.Text ref={texto}>
                    <div style={
                        {
                            maxHeight: expandido ? maxHeightPosible : maxHeight,
                            overflow: 'hidden',
                            transition: 'max-height 0.4s ease'
                        }
                    }>
                        {producto.description}
                    </div>
                    {mostrarExpandir && (
                        <Button className='btn-light' onClick={() => setExpandido(!expandido)}>{expandido ? 'Leer menos...' : 'Leer más...'}</Button>
                    )}
                </Card.Text>
            </Card.Body>
            <ListGroup className='list-group-flush'>
                {props.detalle ? <ListGroup.Item><Link to='/productos' >Volver a productos</Link> </ListGroup.Item> : <ListGroup.Item><Link to={'/item/' + producto.id}>Ver detalle</Link> </ListGroup.Item>}
                <ListGroup.Item>{producto.category}</ListGroup.Item>
                <ListGroup.Item>{`$ ${producto.price}`}</ListGroup.Item>

            </ListGroup>
        </Card>
    );
}
