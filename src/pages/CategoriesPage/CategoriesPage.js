import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { getProductsByCategory } from "../../asyncMock"
import ItemListConatainer from "../../components/ItemListContainer/ItemListContainer"

const CategoriesPage = () => {
    const { categoria } = useParams();
    const [data, setData] = useState([]);
    
    const greetingCat = (cat) => {
        switch (cat) {
            case 'escenciales':
                return 'Aceites Escenciales';
            case 'mezclas':
                return 'Mezclas de Aceites';
            case 'inmune':
                return 'Apoyo Sistema Inmune';
            case 'deep_blue':
                return 'Deep Blue';
            default:
                break;
        }
    }

    useEffect(() => {
        if (categoria) {
        getProductsByCategory(categoria).then(
            productos => {
                setData(productos);
            }
        );
        }
    }, [categoria]);

    return <ItemListConatainer data={data} greeting={greetingCat(categoria)} />;
};

export default CategoriesPage;