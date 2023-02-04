import React from 'react';
import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [productosCarro, setProductosCarro] = useState([]);

    function agregarCarrito(item, cantidad) {

        const nuevoProducto = 'nuevoProducto';
        setProductosCarro((prevCarro) => {
            prevCarro.append(nuevoProducto);
            return prevCarro;
        });
    }

    function vaciarCarrito() {
        setProductosCarro([]);
    }

    function encontrarItem(id) {
        return productosCarro.findIndex((element) => { element.id === id });
    }

    function borrarItem(id){
        const idx = encontrarItem(id);
        if( idx != -1){
            setProductosCarro((prevCarro) => {
                prevCarro.splice(idx, 1);
                return prevCarro;
            });
        }
        
    }





    return (
        <>

        </>
    );
};

export default CartContextProvider;
