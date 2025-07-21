import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Catalogos.css';

function Revistas() {
    const [revistas, setRevistas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchRevistas = async () => {
            try {
                console.log("Iniciando carga de revistas...");
                const response = await fetch('/api/revistas');

                console.log("Respuesta del servidor:", response);
                if (!response.ok) throw new Error(`Error: ${response.status}`);

                const data = await response.json();
                console.log("Datos recibidos:", data);
                setRevistas(data);
            } catch (err) {
                console.error("Error al cargar revistas:", err);
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
                <button
                    onClick={() => navigate('/agregar-revista')}
                    className="add-button"
                >
                    Agregar Nueva Revista
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
                <div className="no-items-container">
                    <p>No hay revistas disponibles en la base de datos</p>
                    <button
                        onClick={() => navigate('/agregar-revista')}
                        className="add-button"
                    >
                        Agregar la Primera Revista
                    </button>
                </div>
            )}
        </div>
    );
}

export default Revistas;