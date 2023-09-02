import { useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { CardContext } from '../../context/cardContext';

const ItemCard = ({ id, titulo, summary, img, isDetail, price })  => {
    const altImg = "imagen representativa del aceite escencial del titulo " + titulo;
    const { agregarItem, eliminarItem } = useContext( CardContext );


    return (
        <div>
            <div>
                <img src={img} alt={altImg} className="imgCard"/>
            </div>
            <h2 className="title is-4" >{titulo}</h2>
            <p>{summary}</p>
            <ItemCount
                id={id}
                initial={1}
                stock={12}
                onAdd={(cantidad) => {
                    if (cantidad) {
                        agregarItem({
                            id,
                            titulo,
                            summary,
                            img,
                            price,
                        }, cantidad);
                    }
                }}
                isDetail={isDetail}
                price={price}
                onDelete={eliminarItem}
            />
        </div>
    )
}

export default ItemCard;