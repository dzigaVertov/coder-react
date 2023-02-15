import React from 'react';
import {Button, Modal} from 'react-bootstrap';
import './ModalFinalCompra.css';

const ModalFinalCompra = (props) => {
    let {show, idCompra, finalizar} = props;
    
    return (

        
        <Modal show={show}>
          <Modal.Header>
            <Modal.Title>Compra Exitosa</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <h3>Este es el código de tu compra:</h3>
            <h2>{idCompra}</h2>
            <h4>¡Memorízalo!</h4>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={finalizar}>Aceptar</Button>
          </Modal.Footer>
          
        </Modal>
    );
};

export default ModalFinalCompra;
