import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import logo from "./asset/logo.png"

const NavBar = () => {
    
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link to={'/'} className="navbar-item">
                    <img src={logo} alt="Gota representativa de aceite escencial, de color morado"/>
                    <h1 className="title is-3">Siempre Natural</h1>
                </Link>

                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navBarMenu" className="navbar-menu">
                <div className="navbar-start">
                    <Link to={'/category/escenciales'} className="navbar-item">Aceites Escenciales</Link>
                    <Link to={'/category/mezclas'} className="navbar-item">Mezcla de Acietes</Link>
                    <Link to={'/category/inmune'} className="navbar-item">Apoyo Sistema Inmune</Link>
                    <Link to={'/category/deep_blue'} className="navbar-item">Deep Blue</Link>

                </div>
            </div>

            <div className="navbar-end">
                <div className="navbar-item">
                    <div className="buttons">
                        <CartWidget />
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default NavBar