import React from 'react';
import {Button, Modal} from 'react-bootstrap';

const ModalFinalCompra = (props) => {
    let {show, idCompra} = props;
    
    return (

        
        <Modal show={show}>
          <Modal.Header>
            <Modal.Title>Compra Exitosa</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <h2>Este es el código de tu compra:</h2>
            <h1>{idCompra}</h1>
            <h3>¡Memorízalo!</h3>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={()=> show=false }>Aceptar</Button>
          </Modal.Footer>
          
        </Modal>
    );
};

export default ModalFinalCompra;
