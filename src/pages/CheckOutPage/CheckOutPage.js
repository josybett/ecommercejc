import { useContext, useState } from "react";
import { CardContext } from "../../context/cardContext";
import { Link } from "react-router-dom";

import ProductListCheckout from '../../components/ProductListCheckout/ProductListCheckout';
import { crearOrden } from '../../services/firebase';

const CheckOutPage = () => {
    const { items, eliminarItem, limpiarCarrito } = useContext( CardContext );

    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [isSaving, setIsSaving] = useState(false);
    const [compraId, setCompraId] = useState(undefined);

    const handledClick = (event) => {
        event.preventDefault();

        if (nombre && telefono && email) {
            setIsSaving(true);
            crearOrden(
                {
                    nombre,
                    telefono,
                    email,
                },
                items
            ).then(( data ) => {
                setCompraId(data.id);
                limpiarCarrito();
                setIsSaving(false);
            }).catch((error) => {
                console.log(error);
                setIsSaving(false);
            });
        }
    };

    if (compraId) {
        return (
            <div className="notification is-primary alert-checkout-container">
                Compra agregada exitosamente con el ID <strong>{compraId}</strong>
                <br />
                <br />
                <Link to="/">Ir al inicio</Link>
            </div>
        );
    }

    if (!items.length) {
        return (
            <div className="notification is-warning alert-checkout-container">
                No tiene productos agregados al carrito,
                debe <Link to="/">agregar</Link> al menos un producto
            </div>
        );
    }

    return (
        <div className="details-container">
            <ProductListCheckout
                items={items}
                onDelete={eliminarItem}
            />
            {items?.length && !compraId && (
                <form onSubmit={handledClick}>
                    <div className="field">
                        <label className="label">Nombre</label>
                        <div className="control">
                            <input name="nombre" className="input" type="text" placeholder="Su nombre" onChange={(event) => {
                                const { value } = event.target;
                                setNombre(value);
                            }} required/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Télefono</label>
                        <div className="control">
                            <input className="input" type="number" placeholder="Su teléfono" onChange={(event) => {
                                const { value: number } = event.target;
                                setTelefono(number);
                            }} required/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control">
                            <input className="input" type="email" placeholder="Su email" onChange={(event) => {
                                const { value } = event.target;
                                setEmail(value)
                            }} required/>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column is-half">
                            <button
                                className="button is-danger is-outlined button-action-card"
                                onClick={limpiarCarrito}
                                type="button"
                                disabled={isSaving}
                            >
                                <span>Limpiar carrito</span>
                            </button>
                        </div>
                        <div className="column is-half">
                            {!isSaving && (
                                <button className="button is-primary button-action-card" type="submit" disabled={!nombre || !telefono || !email}>
                                    <span>Procesar la compra</span>
                                </button> 
                            )}
                            {isSaving && (
                                <button className="button is-primary is-loading button-action-card" type="submit" disabled={!nombre || !telefono || !email}>
                                    Loading
                                </button>
                            )}
                        </div>
                    </div>
                </form>
            )}
        </div>
    );
};

export default CheckOutPage;