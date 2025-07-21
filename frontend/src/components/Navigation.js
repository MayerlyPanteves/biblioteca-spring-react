import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
    return (
        <nav className="main-nav">
            <div className="nav-container">
                <Link to="/" className="nav-brand">
                    Biblioteca
                </Link>
                <div className="nav-links">
                    <Link to="/libros" className="nav-link">
                        Libros
                    </Link>
                    <Link to="/dvds" className="nav-link">
                        DVDs
                    </Link>
                    <Link to="/revistas" className="nav-link">
                        Revistas
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;