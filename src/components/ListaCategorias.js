import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ListaCategorias.css';

export default function ListaCategorias(props) {
    const [listaCategorias, setListaCategorias] = useState();
    const catId = props.catId;

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(resp => resp.json())
            .then(respJson => setListaCategorias(respJson));
    }, []);

    return (
        <div className='contenedorCategorias'>
            {listaCategorias && listaCategorias.map((cat) => <Link className={'categoria' + (cat === catId ? ' disabled' : '')} key={cat} to={`/coder-react/productos/categories/${cat}`}>{cat}</Link>)}
        </div>
    );
}
