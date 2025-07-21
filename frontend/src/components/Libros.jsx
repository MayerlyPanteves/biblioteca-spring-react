import React, { useState, useEffect } from 'react';
import {
    getLibros,
    createLibro,
    updateLibro,
    deleteLibro
} from '../services/api';

const Libros = () => {
    const [libros, setLibros] = useState([]);
    const [formData, setFormData] = useState({
        titulo: '',
        autor: '',
        isbn: '',
        año: '',
        numeroPaginas: ''
    });
    const [editingId, setEditingId] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const loadLibros = async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await getLibros();
            setLibros(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadLibros();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            if (editingId) {
                await updateLibro(editingId, formData);
            } else {
                await createLibro(formData);
            }

            setFormData({
                titulo: '',
                autor: '',
                isbn: '',
                año: '',
                numeroPaginas: ''
            });
            setEditingId(null);
            await loadLibros();
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleEdit = (libro) => {
        setFormData({
            titulo: libro.titulo,
            autor: libro.autor,
            isbn: libro.isbn,
            año: libro.año,
            numeroPaginas: libro.numeroPaginas
        });
        setEditingId(libro.id);
    };

    const handleDelete = async (id) => {
        if (window.confirm('¿Estás seguro de eliminar este libro?')) {
            setLoading(true);
            try {
                await deleteLibro(id);
                await loadLibros();
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <div className="container">
            <h2>Gestión de Libros</h2>

            {error && <div className="alert alert-danger">{error}</div>}

            <form onSubmit={handleSubmit} className="mb-4">
                <div className="row g-3">
                    <div className="col-md-6">
                        <label className="form-label">Título</label>
                        <input
                            type="text"
                            className="form-control"
                            name="titulo"
                            value={formData.titulo}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Autor</label>
                        <input
                            type="text"
                            className="form-control"
                            name="autor"
                            value={formData.autor}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="col-md-4">
                        <label className="form-label">ISBN</label>
                        <input
                            type="text"
                            className="form-control"
                            name="isbn"
                            value={formData.isbn}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="col-md-4">
                        <label className="form-label">Año</label>
                        <input
                            type="number"
                            className="form-control"
                            name="año"
                            value={formData.año}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="col-md-4">
                        <label className="form-label">Páginas</label>
                        <input
                            type="number"
                            className="form-control"
                            name="numeroPaginas"
                            value={formData.numeroPaginas}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="col-12">
                        <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={loading}
                        >
                            {loading ? 'Procesando...' : editingId ? 'Actualizar' : 'Guardar'}
                        </button>

                        {editingId && (
                            <button
                                type="button"
                                className="btn btn-secondary ms-2"
                                onClick={() => {
                                    setFormData({
                                        titulo: '',
                                        autor: '',
                                        isbn: '',
                                        año: '',
                                        numeroPaginas: ''
                                    });
                                    setEditingId(null);
                                }}
                            >
                                Cancelar
                            </button>
                        )}
                    </div>
                </div>
            </form>

            {loading ? (
                <div className="text-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Cargando...</span>
                    </div>
                </div>
            ) : (
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead className="table-dark">
                        <tr>
                            <th>Título</th>
                            <th>Autor</th>
                            <th>ISBN</th>
                            <th>Año</th>
                            <th>Páginas</th>
                            <th>Acciones</th>
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
                                    <td>{libro.numeroPaginas}</td>
                                    <td>
                                        <button
                                            className="btn btn-sm btn-warning me-2"
                                            onClick={() => handleEdit(libro)}
                                        >
                                            Editar
                                        </button>
                                        <button
                                            className="btn btn-sm btn-danger"
                                            onClick={() => handleDelete(libro.id)}
                                        >
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="text-center">No hay libros registrados</td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Libros;