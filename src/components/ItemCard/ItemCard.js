import ItemCount from '../ItemCount/ItemCount';

const ItemCard = ({ id, titulo, summary, img, isDetail, price })  => {
    const altImg = "imagen representativa del aceite escencial del titulo " + titulo;

    return (
        <div>
            <div>
                <img src={img} alt={altImg} className="imgCard"/>
            </div>
            <h2 className="title is-4" >{titulo}</h2>
            <p>{summary}</p>
            <ItemCount id={id} initial={0} stock={12} onAdd={(cant) => console.log('Cant agregada ', cant)} isDetail={isDetail} price={price} />
        </div>
    )
}

export default ItemCard;