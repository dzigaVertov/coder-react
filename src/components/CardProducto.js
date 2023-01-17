import React from 'react'
import {Card, ListGroup} from 'react-bootstrap'
import { useRef, useState, useEffect } from 'react';

export default function CardProducto(props) {
  const producto = props.producto;
  const maxHeightPosible = 500;
  const maxHeight = 300;
  const texto = useRef();

  const [mostrarExpandir, setMostrarExpandir] = useState(false);
  const [expandido, setExpandido] = useState(true);


  return (
    <Card style={{maxWidth: "250px"}} key={producto.id + producto.title} >
      <Card.Img variant='top' src={producto.image} />
      <Card.Body>
        <Card.Title>{producto.Title}</Card.Title>
        <Card.Text>
          {producto.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className='list-group-flush'>
        <ListGroup.Item>{producto.category}</ListGroup.Item>
        <ListGroup.Item>{producto.price}</ListGroup.Item>
      </ListGroup>
    </Card>
  )
}
