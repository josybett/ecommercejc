import { useState, useEffect } from "react"
import { getProducts } from "../../asyncMock"
import ItemListConatainer from "../../components/ItemListContainer/ItemListContainer"

const HomePage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getProducts().then(
            productos => {
                setData(productos);
            }
        );
    }, []);

    return <ItemListConatainer data={data} greeting={"Bienvenido, soluciones naturales"} />;
};

export default HomePage;
