import React, { useRef, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const ModalDatos = (props) => {
    const { show, onCancelar, onEnviar } = props;
    let nombre = useRef('');
    let email = useRef('');
    let tel = useRef('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onEnviar({nombre:nombre.current.value, email: email.current.value, tel: tel.current.value});
    };

    return (
        <Modal show={show}>
            <Form onSubmit={handleSubmit}>
                <Modal.Header>
                    <Modal.Title>Ingrese sus datos</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form.Group>
                        <Form.Label>Nombre y Apellido</Form.Label>
                        <Form.Control ref={nombre} type='text' />
                        <Form.Label>Email</Form.Label>
                        <Form.Control ref={email} type='email' />
                        <Form.Label>Teléfono</Form.Label>
                        <Form.Control ref={tel} type='tel' />
                    </Form.Group>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={onCancelar}>Cancelar</Button>
                    <Button type='submit'>Enviar</Button>
                </Modal.Footer>

            </Form>
        </Modal >
    );
};

export default ModalDatos;

