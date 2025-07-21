import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Libros from './components/Libros';
import Dvds from './components/Dvds';
import Revistas from './components/Revistas';
import Navigation from './components/Navigation';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Navigation />
                <main className="container mt-4">
                    <Routes>
                        {/* Ruta principal redirige a /libros */}
                        <Route path="/" element={<Libros />} />

                        {/* Rutas específicas */}
                        <Route path="/libros" element={<Libros />} />
                        <Route path="/dvds" element={<Dvds />} />
                        <Route path="/revistas" element={<Revistas />} />

                        {/* Ruta para manejar páginas no encontradas */}
                        <Route path="*" element={
                            <div className="alert alert-danger mt-4">
                                <h2>404 - Página no encontrada</h2>
                                <p>La página que buscas no existe.</p>
                            </div>
                        } />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;