import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Catalogos.css'; // Archivo de estilos compartido

function Dvds() {
    const [dvds, setDvds] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchDvds = async () => {
            try {
                const response = await fetch('/api/dvds');
                if (!response.ok) throw new Error('Error al obtener DVDs');
                const data = await response.json();
                setDvds(Array.isArray(data) ? data : []);
            } catch (err) {
                console.error('Error fetching DVDs:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchDvds();
    }, []);

    if (loading) return <div className="loading">Cargando DVDs...</div>;
    if (error) return <div className="error">Error: {error}</div>;

    return (
        <div className="catalogo-container">
            <div className="header">
                <h1>Catálogo de DVDs</h1>
                <button onClick={() => navigate('/')} className="back-button">
                    Volver al Inicio
                </button>
            </div>

            {dvds.length > 0 ? (
                <div className="grid-container">
                    {dvds.map(dvd => (
                        <div key={dvd.id} className="card-item">
                            <h3>{dvd.titulo}</h3>
                            <p><strong>Director:</strong> {dvd.director}</p>
                            <p><strong>Género:</strong> {dvd.genero}</p>
                            <p><strong>Duración:</strong> {dvd.duracion} min</p>
                            <p><strong>Año:</strong> {dvd.anio}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="no-items">No hay DVDs disponibles</p>
            )}
        </div>
    );
}

export default Dvds;