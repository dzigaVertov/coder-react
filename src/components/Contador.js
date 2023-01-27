import React from 'react';
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

	return (

		<Container >
			<div style={{ display: 'flex', flexDirection: 'row' }}>
				<Button onClick={menosUno} >-</Button>
				<h3>{numItems}</h3>
				<Button onClick={masUno}>+</Button>
				<Button onClick={onAdd}>Agregar al carrito</Button>
			</div>
		</Container>
	);
}
