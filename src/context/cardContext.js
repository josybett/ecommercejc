import { createContext, useMemo, useState } from 'react';

const CardContext = createContext({
    items: [],
});

const CardContextProvider = ({
    children
}) => {
    const [items, setItems] = useState([]);

    const agregarItem = ( item, cantidad ) => {
        let productos = [...items];
        const index = productos.findIndex(( i ) => i.id === item.id );
        if (index >= 0) {
            productos[index].cantidad += cantidad;
        } else {
            productos.push({
                ...item,
                cantidad,
            });
        }
        setItems(productos);
    };

    const eliminarItem = (id) => {
        setItems(items.filter(( item ) => item.id !== id ));
    };

    const limpiarCarrito = () => {
        setItems([]);
    };

    const enCarrito = (id) => items.some(( item ) => item.id === id );

    const value = useMemo(() => ({
        items,
        agregarItem,
        eliminarItem,
        limpiarCarrito,
        enCarrito,
    // eslint-disable-next-line
    }), [items, setItems]);

    return (
        <CardContext.Provider value={value}>
            {children}
        </CardContext.Provider>
    );
};

export {
    CardContext,
    CardContextProvider,
};