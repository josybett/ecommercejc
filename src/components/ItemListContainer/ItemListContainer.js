import ItemCard from "../ItemCard/ItemCard"
import { useNavigate } from 'react-router-dom';

const ItemListConatainer = ({ greeting, data }) => {
    return (
        <div>
            <section className="hero is-info">
                <div className="hero-body">
                    <h1 className="title">{greeting}</h1>
                </div>
            </section>
            
            <div className="containe is-fluid">
                <div className="section">
                    <div className="columns wraps">
                        {data.map(
                            producto => (
                                <div className="column is-4" key={producto.id}>
                                    <ItemCard id={producto.id} titulo={producto.titulo} summary={producto.descripcion} img={producto.img} price={producto.precio} />
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemListConatainer;