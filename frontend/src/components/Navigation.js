import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">Biblioteca</Link>
                <div className="navbar-nav">
                    <Link className="nav-link" to="/libros">Libros</Link>
                    <Link className="nav-link" to="/dvds">DVDs</Link>
                    <Link className="nav-link" to="/revistas">Revistas</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;