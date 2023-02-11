import React from 'react';
import './ItemCarrito.css';

const ItemCarrito = (props) => {
    const prod = props.prod;
    console.log('prod: ', prod);

    return (
        <div className='item'>
            <div className='botones'>
                <span className='btn-borrar'>X</span>
            </div>
            <img className='img-lista-carrito' src={prod.item.image} />
            <div className='col'>{prod.item.title}</div>
            <div className='col'>{`$${prod.item.price}`}</div>
            <div className='col'>{`${prod.quantity}`}</div>
            <div className='col'>{`$${prod.item.price * prod.quantity}`}</div>




        </div>
    );
};

export default ItemCarrito;
