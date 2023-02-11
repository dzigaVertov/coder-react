import React, { createContext, useReducer, useContext } from 'react';


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
            localStorage.setItem('carrito', JSON.stringify(carrito));
            return { ...carrito };
        }
        case ACCIONES.BORRAR_ITEM: {
            carrito.productos = carrito.productos.filter(itm => itm.id != action.payload.item.id);
            localStorage.setItem('carrito', JSON.stringify(carrito));
            return { ...carrito };
        }
        case ACCIONES.AGREGAR_PRODUCTO: {

            const idx = carrito.buscarItem(action.payload.item.id);

            if (idx === -1) {        // El producto no está en el carrito

                const productoCarrito = { id: action.payload.item.id, item: action.payload.item, quantity: action.payload.quantity };
                carrito.productos.push(productoCarrito);
            } else {            // El producto ya está en el carrito, agregamos cantidad
                carrito.productos[idx].quantity += action.payload.quantity;
            }
            localStorage.setItem('carrito', JSON.stringify(carrito));
            return { ...carrito };
        }
        default: {
            localStorage.setItem('carrito', JSON.stringify(carrito));
            return { ...carrito };
        }

    }
}

function hacerCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito'));
    
    return {
        productos: carrito ? carrito.productos : [],

        buscarItem(id) {
            return this.productos.findIndex(x => x.id === id);
        },

        isInCart(id) {
            return this.productos.some(x => x.id === id);
        }
    };
}

const CartContextProvider = ({ children }) => {

    const [carrito, dispatch] = useReducer(cartReducer, hacerCarrito());
    const value = { carrito, dispatch };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

export function useCarrito() {
    const carritoContext = useContext(CartContext);
    return carritoContext;
}

export default CartContextProvider;
