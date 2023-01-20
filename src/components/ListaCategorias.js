import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function ListaCategorias() {
    const [listaCategorias, setListaCategorias] = useState();

    useEffect( () => {
        fetch('https://fakestoreapi.com/products/categories')
      .then(resp => resp.json())
      .then(respJson => {setListaCategorias(respJson); console.log(respJson);});
    }, [])

  return(
    <div style={{display:'flex', flexDirection:'row', gap:15}}>
    {listaCategorias && listaCategorias.map((cat) => <Link to={`/productos/categories/${cat}`}>{cat}</Link> )}
    </div>
  )
}
