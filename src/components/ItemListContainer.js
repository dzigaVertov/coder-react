import React from 'react'
import GridProductos from './GridProductos'
import {useEffect, useState} from 'react'



export default function ItemListContainer(props) {

  const [listaProductos, setListaProductos] = useState();

  useEffect( () => {
    console.log('Fetching...');

    fetch('https://fakestoreapi.com/products')
      .then(resp => resp.json())
      .then(respJson => setListaProductos(respJson) );
    console.log('Lista de productos: ', listaProductos);
  }, [] );

  return (
    listaProductos && <GridProductos productos={listaProductos} />
  )
}
