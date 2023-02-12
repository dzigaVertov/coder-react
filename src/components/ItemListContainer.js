import React from 'react';
import GridProductos from './GridProductos';
import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import ListaCategorias from './ListaCategorias.js';
import Loading from './Loading';


export default function ItemListContainer() {

  const [listaProductos, setListaProductos] = useState();
  const catId = useParams();

  useEffect( () => {
    if(catId.id){
      fetch(`https://fakestoreapi.com/products/category/${catId.id}`)
      .then(resp => resp.json())
      .then(respJson => setListaProductos(respJson));
      
    } else {
      fetch('https://fakestoreapi.com/products')
      .then(resp => resp.json())
      .then(respJson => setListaProductos(respJson));
    }
    
  }, [catId] );

  return (
    <>
    <ListaCategorias />
      {listaProductos ? <GridProductos productos={listaProductos} /> : <Loading/>}
    </>
  );
}
