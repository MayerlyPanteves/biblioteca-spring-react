import React, { useEffect, useState } from 'react';
import { getAutores } from '../services/autorService';

const AutorList = () => {
    const [autores, setAutores] = useState([]);

    useEffect(() => {
        const fetchAutores = async () => {
            try {
                const response = await getAutores();
                setAutores(response.data);
            } catch (error) {
                console.error('Error fetching autores:', error);
            }
        };

        fetchAutores();
    }, []);

    return (
        <div>
            <h2>Lista de Autores</h2>
            <ul>
                {autores.map(autor => (
                    <li key={autor.id}>{autor.nombre} - {autor.nacionalidad}</li>
                ))}
            </ul>
        </div>
    );
};

export default AutorList;