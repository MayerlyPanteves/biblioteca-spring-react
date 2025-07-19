import React, { useState, useEffect } from 'react';
import { createItem, getItems, updateItem, deleteItem } from '../services/api';

export default function SectionTemplate({ title, fields, endpoint }) {
    const [data, setData] = useState([]);
    const [formData, setFormData] = useState({});
    const [editingId, setEditingId] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const result = await getItems(endpoint);
            setData(result);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            if (editingId) {
                await updateItem(endpoint, editingId, formData);
            } else {
                await createItem(endpoint, formData);
            }
            setFormData({});
            setEditingId(null);
            await fetchData();
        } finally {
            setIsLoading(false);
        }
    };

    const handleEdit = (item) => {
        setFormData({
            titulo: item.titulo,
            autor: item.autor,
            isbn: item.isbn,
            año: item.año
        });
        setEditingId(item.id);
    };

    return (
        <section className="management-section">
            <h2>{title}</h2>

            <form onSubmit={handleSubmit}>
                {fields.map((field) => (
                    <div key={field} className="form-group">
                        <label>{field}:</label>
                        <input
                            type="text"
                            name={field.toLowerCase()}
                            value={formData[field.toLowerCase()] || ''}
                            onChange={(e) => setFormData({
                                ...formData,
                                [e.target.name]: e.target.value
                            })}
                            required
                        />
                    </div>
                ))}
                <button type="submit" disabled={isLoading}>
                    {editingId ? 'Actualizar' : 'Guardar'}
                </button>
                {editingId && (
                    <button type="button" onClick={() => {
                        setFormData({});
                        setEditingId(null);
                    }}>
                        Cancelar
                    </button>
                )}
            </form>

            <table className="data-table">
                <thead>
                <tr>
                    {fields.map(field => <th key={field}>{field}</th>)}
                    <th>Acciones</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item) => (
                    <tr key={item.id}>
                        <td>{item.titulo}</td>
                        <td>{item.autor}</td>
                        <td>{item.isbn}</td>
                        <td>{item.año}</td>
                        <td>
                            <button onClick={() => handleEdit(item)}>Editar</button>
                            <button onClick={() => deleteItem(endpoint, item.id).then(fetchData)}>
                                Eliminar
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </section>
    );
}