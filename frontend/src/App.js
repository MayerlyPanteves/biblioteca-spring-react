import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Libros from './components/Libros';
import Dvds from './components/Dvds';
import Revistas from './components/Revistas';
import Navigation from './components/Navigation';
import './App.css';

function App() {
    return (
        <Router>
            <div className="app-container">
                <Navigation />
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/libros" element={<Libros />} />
                        <Route path="/dvds" element={<Dvds />} />
                        <Route path="/revistas" element={<Revistas />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;