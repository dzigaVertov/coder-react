import React from 'react'
import { Container } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import CardProducto from './CardProducto';


  


export default function ItemDetailContainer() {
  let productoid = useParams();
  
  const [item, setItem] = useState();


  useEffect( () => {
    fetch(`https://fakestoreapi.com/products/${productoid.id}`)
      .then(resp => resp.json())
      .then(respJson => setItem(respJson) );
  }, [productoid] );

    return (
    <Container className='justify-content-center'>
        {item && <CardProducto producto={item} ancho_max={'400px'} detalle={true}/>}
                
    </Container>
  )
}
 
