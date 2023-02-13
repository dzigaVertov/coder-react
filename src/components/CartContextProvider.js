import React, { createContext, useReducer, useContext, useEffect } from 'react';


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

            return { ...carrito, productos: [] };
        }
        case ACCIONES.BORRAR_ITEM: {

            return { ...carrito, productos: carrito.productos.filter(itm => itm.id != action.payload.item.id) };
        }
        case ACCIONES.AGREGAR_PRODUCTO: {

            const idx = carrito.buscarItem(action.payload.item.id);

            if (idx === -1) {        // El producto no está en el carrito
                const productoCarrito = { id: action.payload.item.id, item: action.payload.item, quantity: action.payload.quantity };
                return { ...carrito, productos: [...carrito.productos, productoCarrito] };
            } else {            // El producto ya está en el carrito, agregamos cantidad

                const nuevaCantidad = carrito.productos[idx].quantity + action.payload.quantity;
                const productoActualizado = { ...carrito.productos[idx], quantity: nuevaCantidad };
                let nuevoProductos = [...carrito.productos];
                nuevoProductos.splice(idx, 1);
                nuevoProductos.push(productoActualizado);
                return { ...carrito, productos: nuevoProductos };

            }
        }
        default: {
            throw new Error();
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
        },

        totalCompra() {
            return (this.productos.reduce((accum, prod)=> accum + (prod.item.price * prod.quantity))).toFixed(2);
        },

        ivaCompra() {
            return (this.totalCompra()*0.21).toFixed(2);
        }
    };
}

const CartContextProvider = ({ children }) => {

    const [carrito, dispatch] = useReducer(cartReducer, hacerCarrito());

    // Persistir el carrito en localStorage
    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }, [carrito]);


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
