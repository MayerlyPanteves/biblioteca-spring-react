import React, { useState, useEffect } from 'react';
import { createItem, getItems, updateItem, deleteItem } from '../services/api';

export default function SectionTemplate({ title, fields, endpoint }) {
    const [data, setData] = useState([]);
    const [formData, setFormData] = useState({
        titulo: '',
        autor: '',
        isbn: '',
        año: ''
    });
    const [editingId, setEditingId] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    // Función para cargar los datos
    const fetchData = async () => {
        setIsLoading(true);
        try {
            const result = await getItems(endpoint);
            setData(result);
        } catch (error) {
            console.error("Error al cargar datos:", error);
            alert("Error al cargar los datos");
        } finally {
            setIsLoading(false);
        }
    };

    // Cargar datos al inicio
    useEffect(() => {
        fetchData();
    }, [endpoint]);

    // Manejar envío del formulario (crear/actualizar)
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            if (editingId) {
                await updateItem(endpoint, editingId, formData);
            } else {
                await createItem(endpoint, formData);
            }
            setFormData({ titulo: '', autor: '', isbn: '', año: '' });
            setEditingId(null);
            await fetchData();
        } catch (error) {
            console.error("Error al guardar:", error);
            alert("Error al guardar los cambios");
        } finally {
            setIsLoading(false);
        }
    };

    // Manejar edición de un registro
    const handleEdit = (item) => {
        setFormData({
            titulo: item.titulo || '',
            autor: item.autor || '',
            isbn: item.isbn || '',
            año: item.año || ''
        });
        setEditingId(item.id);
    };

    return (
        <div className="section-container">
            <h2>{title}</h2>

            {/* Formulario */}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Título:</label>
                    <input
                        type="text"
                        value={formData.titulo}
                        onChange={(e) => setFormData({...formData, titulo: e.target.value})}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Autor:</label>
                    <input
                        type="text"
                        value={formData.autor}
                        onChange={(e) => setFormData({...formData, autor: e.target.value})}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>ISBN:</label>
                    <input
                        type="text"
                        value={formData.isbn}
                        onChange={(e) => setFormData({...formData, isbn: e.target.value})}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Año:</label>
                    <input
                        type="number"
                        value={formData.año}
                        onChange={(e) => setFormData({...formData, año: e.target.value})}
                        required
                    />
                </div>

                <button type="submit" disabled={isLoading}>
                    {editingId ? 'Actualizar' : 'Guardar'}
                </button>

                {editingId && (
                    <button
                        type="button"
                        onClick={() => {
                            setFormData({ titulo: '', autor: '', isbn: '', año: '' });
                            setEditingId(null);
                        }}
                    >
                        Cancelar
                    </button>
                )}
            </form>

            {/* Tabla de datos */}
            <table className="data-table">
                <thead>
                <tr>
                    <th>Título</th>
                    <th>Autor</th>
                    <th>ISBN</th>
                    <th>Año</th>
                    <th>Acciones</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item) => (
                    <tr key={item.id}>
                        <td>{item.titulo || '-'}</td>
                        <td>{item.autor || '-'}</td>
                        <td>{item.isbn || '-'}</td>
                        <td>{item.año || '-'}</td>
                        <td>
                            <button onClick={() => handleEdit(item)}>Editar</button>
                            <button onClick={async () => {
                                if (window.confirm('¿Eliminar este registro?')) {
                                    await deleteItem(endpoint, item.id);
                                    await fetchData();
                                }
                            }}>
                                Eliminar
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}