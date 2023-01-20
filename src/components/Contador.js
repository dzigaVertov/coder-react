import React from 'react'
import { useState } from 'react'
import { Button, Container, Row } from 'react-bootstrap';

export default function Contador() {
    const [numItems, setNumItems] = useState(0);

    const masUno = () => setNumItems(numItems +1);
    const menosUno = () => {
        if(numItems > 0){
            setNumItems(numItems -1);
        }
    }

    return(
    
        <Container >
            <div style={{display: 'flex' , flexDirection: 'row'}}>
                <Button onClick={menosUno} >-</Button>    
                <h3>{numItems}</h3>
                <Button onClick={masUno}>+</Button>
            </div>
        </Container>    
  )
}
