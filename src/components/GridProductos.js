import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import CardProducto from './CardProducto'

export default function GridProductos(props) {
    const listaProductos = props.productos;

  return (
    <Container fluid> 
      <Row lg={4} md={2} className='gap-3' >
        {listaProductos.map(prod => <CardProducto key={prod.id + prod.title} producto={prod} />)};
        
      </Row>      
      </Container>
  )
}
