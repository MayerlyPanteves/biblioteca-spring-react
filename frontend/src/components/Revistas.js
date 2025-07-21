import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Catalogos.css'; // Mismo archivo de estilos que Dvds

function Revistas() {
    const [revistas, setRevistas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchRevistas = async () => {
            try {
                const response = await fetch('/api/revistas');
                if (!response.ok) throw new Error('Error al obtener revistas');
                const data = await response.json();
                setRevistas(Array.isArray(data) ? data : []);
            } catch (err) {
                console.error('Error fetching Revistas:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchRevistas();
    }, []);

    if (loading) return <div className="loading">Cargando revistas...</div>;
    if (error) return <div className="error">Error: {error}</div>;

    return (
        <div className="catalogo-container">
            <div className="header">
                <h1>Catálogo de Revistas</h1>
                <button onClick={() => navigate('/')} className="back-button">
                    Volver al Inicio
                </button>
            </div>

            {revistas.length > 0 ? (
                <div className="grid-container">
                    {revistas.map(revista => (
                        <div key={revista.id} className="card-item">
                            <h3>{revista.titulo}</h3>
                            <p><strong>Editorial:</strong> {revista.editorial}</p>
                            <p><strong>ISSN:</strong> {revista.issn}</p>
                            <p><strong>Periodicidad:</strong> {revista.periodicidad}</p>
                            <p><strong>Temática:</strong> {revista.tematica}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="no-items">No hay revistas disponibles</p>
            )}
        </div>
    );
}

export default Revistas;