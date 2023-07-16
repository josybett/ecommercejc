const ItemCard = ({ titulo, summary, img })  => {
    const altImg = "imagen representativa del aceite escencial del titulo " + titulo;
    return (
        <div>
            <div>
                <img src={img} alt={altImg} className="imgCard"/>
            </div>
            <h2 className="title is-4" >{titulo}</h2>
            <p>{summary}</p>
        </div>
    )
}

export default ItemCard;