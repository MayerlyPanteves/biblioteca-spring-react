import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
    return (
        <div className="home-page">
            <h1>Biblioteca Digital</h1>
            <div className="menu-options">
                <Link to="/libros" className="option-card">
                    <h2>Libros</h2>
                    <p>Explora nuestra colección literaria</p>
                </Link>
                <Link to="/dvds" className="option-card">
                    <h2>DVDs</h2>
                    <p>Material audiovisual educativo</p>
                </Link>
                <Link to="/revistas" className="option-card">
                    <h2>Revistas</h2>
                    <p>Publicaciones periódicas especializadas</p>
                </Link>
            </div>
        </div>
    );
}

export default Home;