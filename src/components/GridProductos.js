import React from 'react';
import { Container, Row } from 'react-bootstrap';
import CardProducto from './CardProducto';

export default function GridProductos(props) {
    const listaProductos = props.productos;
    const stock = 10;		// Provisorio hasta que conectemos la db

    return (
        <Container className='mt-5'>
            <Row className='gap-4 justify-content-center' >
                {listaProductos.map(prod => <CardProducto key={prod.id + prod.title} producto={prod} stock={stock} ancho_max={'250px'} />)};
            </Row>
        </Container>
    );
}
