import React, { useEffect, useState } from 'react';

function Libros() {
    const [libros, setLibros] = useState([]);

    useEffect(() => {
        fetch('/api/libros')
            .then(response => response.json())
            .then(data => setLibros(data))
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div>
            <h2>Listado de Libros</h2>
            <ul className="list-group">
                {libros.map(libro => (
                    <li key={libro.id} className="list-group-item">
                        {libro.titulo} - {libro.autor}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Libros;