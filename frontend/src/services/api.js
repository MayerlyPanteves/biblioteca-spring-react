const API_URL = 'http://localhost:8080/api';

// Operaciones para Libros
export const getLibros = async () => {
    try {
        const response = await fetch(`${API_URL}/libros`);
        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching libros:', error);
        throw error;
    }
};

export const createLibro = async (libroData) => {
    try {
        const response = await fetch(`${API_URL}/libros`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                titulo: libroData.titulo,
                autor: libroData.autor,
                isbn: libroData.isbn,
                año: libroData.año,
                numeroPaginas: libroData.numeroPaginas || 0
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Error al crear libro');
        }

        return await response.json();
    } catch (error) {
        console.error('Error creating libro:', error);
        throw error;
    }
};

export const updateLibro = async (id, libroData) => {
    try {
        const response = await fetch(`${API_URL}/libros/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(libroData)
        });

        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error updating libro:', error);
        throw error;
    }
};

export const deleteLibro = async (id) => {
    try {
        const response = await fetch(`${API_URL}/libros/${id}`, {
            method: 'DELETE'
        });

        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        return true;
    } catch (error) {
        console.error('Error deleting libro:', error);
        throw error;
    }
};