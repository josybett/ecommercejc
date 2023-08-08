import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ItemCount = ({stock, initial, onAdd, id, isDetail, price}) => {
    const navigate = useNavigate();
    const [ cant, setCant ] = useState(initial);
    const suma = () => {
        if (cant < stock) {
            setCant(cant+1);
        }
    }

    const resta = () => {
        if (cant > 0) {
            setCant(cant-1);
        }
    }

    return (
        <div className="container">
            <div className="columns count-container zero-bottom">
                <div className="column is-5">
                    <h4 className="item-count-number amount">${price}</h4>
                </div>
            </div>
            <div className="columns count-container zero-bottom">
                <div className="column is-2">
                    <button className="button is-primary" onClick={resta}> - </button>
                </div>
                <div className="column is-1">
                    <h4 className="item-count-number">{cant}</h4>
                </div>
                <div className="column is-2">
                    <button className="button is-primary" onClick={suma}> + </button>
                </div>
            </div>
            <div className="columns zero-bottom">
                <div className="column">
                    <button className="button is-primary" onClick={() => onAdd(cant)} disabled={!stock}>
                        Agregar
                    </button>
                </div>
            </div>
            {!isDetail && (
                <div className="columns zero-bottom">
                    <div className="column">
                        <button className="button is-link" onClick={() => navigate(`/item/${id}`)}>
                            Ver detalle
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ItemCount;