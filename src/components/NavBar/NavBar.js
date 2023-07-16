import CartWidget from "../CartWidget/CartWidget"
import logo from "./asset/logo.png"

const NavBar = () => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="">
                    <img src={logo} alt="Gota representativa de aceite escencial, de color morado"/>
                    <h1 className="title is-3">Siempre Natural</h1>
                </a>

                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navBarMenu" className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item">Aceites Escenciales</a>
                    <a className="navbar-item">Mezcla de Acietes</a>
                    <a className="navbar-item">Apoyo Sistema Inmune</a>
                    <a className="navbar-item">Deep Blue</a>

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