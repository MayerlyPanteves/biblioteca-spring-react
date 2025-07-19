const API_URL = 'http://localhost:8080/api';

export const createItem = async (endpoint, data) => {
    const response = await fetch(`${API_URL}/${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    return await response.json();
};

export const getItems = async (endpoint) => {
    const response = await fetch(`${API_URL}/${endpoint}`);
    return await response.json();
};

export const updateItem = async (endpoint, id, data) => {
    const response = await fetch(`${API_URL}/${endpoint}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    return await response.json();
};

export const deleteItem = async (endpoint, id) => {
    const response = await fetch(`${API_URL}/${endpoint}/${id}`, {
        method: 'DELETE'
    });
    return await response.json();
};