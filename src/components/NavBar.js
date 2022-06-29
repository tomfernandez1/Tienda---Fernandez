const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="">DECO</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                <a className="nav-link active" href="#">Productos</a>
                <a className="nav-link active" href="#">¿Como Comprar?</a>
                <a className="nav-link active" href="#">Sobre Nosotros</a>
                <a className="nav-link active" href="#">Contacto</a>

                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;