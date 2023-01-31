import React, { useEffect } from 'react';
import { useState } from 'react';
import { Button, Container } from 'react-bootstrap';

export default function Contador({ stock, inicial, onAdd }) {
    const [numItems, setNumItems] = useState(inicial);

    const masUno = () => setNumItems((prevNumItems) => {
        if (prevNumItems >= stock) {
            return (prevNumItems);
        }

        return (prevNumItems + 1);
    });

    const menosUno = () => {
        setNumItems((prevNumItems) => {
            return (prevNumItems > 0 ? (prevNumItems - 1) : 0);
        });
    };

    const agregarCarrito = () => {
        onAdd(numItems);
    };

    return (

        <Container style={{ maxWidth: '250px', margin: '0' }}>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', alignContent: 'center', justifyContent: 'center' }}>
                <div className='p-1' style={{ display: 'flex', flexDirection: 'row', gap: '.4rem', border: 'solid grey 1px', borderRadius: '5px', alignItems: 'center' }}>
                    <Button size='sm' onClick={menosUno} >-</Button>
                    <h3 className='mb-0' style={{ padding: '0' }}>{numItems}</h3>
                    <Button size='sm' onClick={masUno}>+</Button>
                </div>
                <Button size='sm' onClick={agregarCarrito} disabled={(stock === 0) || (numItems === 0)} >Agregar al carrito</Button>
            </div>
        </Container>
    );
}
