import React, { useReducer } from 'react';
import { createContext } from 'react';

export const CartContext = createContext();

export const ACCIONES = {
    VACIAR_CARRITO: 'vaciar-carrito',
    BORRAR_ITEM: 'borrar-item',
    ENCONTRAR_ITEM: 'encontrar-item',
    AGREGAR_PRODUCTO: 'agregar-producto'
};

function cartReducer(carrito, action) {
    switch (action.type) {
        case ACCIONES.VACIAR_CARRITO: {
            carrito.productos = [];
            return carrito;
        }
    case ACCIONES.BORRAR_ITEM: {
        carrito.productos = carrito.productos.filter(itm => itm.id != action.payload.id);
            return carrito;
        }
    case ACCIONES.AGREGAR_PRODUCTO: {
        carrito.productos.append(action.payload.item);
            return carrito;
        }
        default: {
            return carrito;
        }

    }
}

function agregarCarrito(item, cantidad) {
    const nuevoProducto = 'nuevoProducto';
    setProductosCarro((prevCarro) => {
        prevCarro.append(nuevoProducto);
        return prevCarro;
    });
}

function encontrarItem(id) {
    return productosCarro.findIndex((element) => element.id === id);
}

function borrarItem(id) {
    const idx = encontrarItem(id);
    if (idx != -1) {
        setProductosCarro((prevCarro) => {
            prevCarro.splice(idx, 1);
            return prevCarro;
        });
    }

}




const CartContextProvider = ({ children }) => {
    const [carrito, dispatch] = useReducer(cartReducer, { productos: [] });
    const value = { carrito, dispatch };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
