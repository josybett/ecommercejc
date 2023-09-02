import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/firebase";
import ItemCard from "../../components/ItemCard/ItemCard";

const ItemPage = () => {
    const {id} = useParams();
    const [producto, setProducto] = useState(null);

    useEffect(() => {
        getProductById(parseInt(id)).then(prod => {
            setProducto(prod);
        });
    }, [id]);

    if (!producto) {
        return (
            <p>No existe</p>
        );
    }

    return (
        <div className="containe">
            <div className="section">
                <ItemCard id={producto.id} titulo={producto.titulo} summary={producto.descripcion} price={producto.precio} img={producto.img} isDetail />
            </div>
        </div>
    );
};
export default ItemPage;