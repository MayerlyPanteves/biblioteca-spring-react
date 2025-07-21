import React, { useState, useEffect } from 'react';
import { getLibros, createLibro } from '../services/api';

const Libros = () => {
    const [libros, setLibros] = useState([]);
    const [formData, setFormData] = useState({
        titulo: '',
        autor: '',
        isbn: '',
        año: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchLibros = async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await getLibros();
            setLibros(data);
        } catch (err) {
            setError(err.message);
            console.error("Error al cargar libros:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchLibros();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            console.log("Enviando datos:", formData); // Log de depuración
            await createLibro(formData);
            setFormData({ titulo: '', autor: '', isbn: '', año: '' });
            await fetchLibros();
        } catch (err) {
            setError(err.message);
            console.error("Error al guardar libro:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container">
            <h1>Gestión de Libros</h1>

            {error && <div className="alert alert-danger">{error}</div>}

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Título:</label>
                    <input
                        type="text"
                        className="form-control"
                        name="titulo"
                        value={formData.titulo}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Autor:</label>
                    <input
                        type="text"
                        className="form-control"
                        name="autor"
                        value={formData.autor}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">ISBN:</label>
                    <input
                        type="text"
                        className="form-control"
                        name="isbn"
                        value={formData.isbn}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Año:</label>
                    <input
                        type="number"
                        className="form-control"
                        name="año"
                        value={formData.año}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={loading}
                >
                    {loading ? 'Guardando...' : 'Guardar Libro'}
                </button>
            </form>

            <h2 className="mt-4">Listado de Libros</h2>

            {loading ? (
                <div className="text-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Cargando...</span>
                    </div>
                </div>
            ) : (
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Título</th>
                        <th>Autor</th>
                        <th>ISBN</th>
                        <th>Año</th>
                    </tr>
                    </thead>
                    <tbody>
                    {libros.length > 0 ? (
                        libros.map(libro => (
                            <tr key={libro.id}>
                                <td>{libro.titulo}</td>
                                <td>{libro.autor}</td>
                                <td>{libro.isbn}</td>
                                <td>{libro.año}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" className="text-center">
                                No hay libros registrados
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Libros;