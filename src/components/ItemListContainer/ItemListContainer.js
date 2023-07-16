import ItemCard from "../ItemCard/ItemCard"
import limon from "./asset/limon.jpeg"
import onguard from "./asset/onguard.jpeg"
import zen from "./asset/zen.jpeg"

const ItemListConatainer = ({ greeting }) => {
    return (
        <div>
            <section className="hero is-info">
                <div className="hero-body">
                    <h1 className="title">{greeting}</h1>
                </div>
            </section>
            
            <div className="containe">
                <div className="section">
                    <div className="columns">
                        <div className="column is-4">
                            <ItemCard titulo="Aceites Indivuduales" summary="Aceites escenciales puros, sólo un ingrediente" img={limon} />
                        </div>
                        <div className="column is-4">
                            <ItemCard titulo="Mezcla de Aceites" summary="Mezcla de aceites enfocados para un propósito" img={zen} />
                        </div>
                        <div className="column is-4">
                            <ItemCard titulo="OnGuard" summary="Mezcla de aceite que apoya al sistema inmunológico" img={onguard} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemListConatainer;