import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import CardProducto from './CardProducto'

export default function GridProductos(props) {
    const listaProductos = props.productos;

  return (
    <Container className='mt-5'> 
      <Row className='gap-4 justify-content-center' >
        {listaProductos.map(prod => <CardProducto key={prod.id + prod.title} producto={prod} ancho_max={'250px'}/>)};
      </Row>      
      </Container>
  )
}
