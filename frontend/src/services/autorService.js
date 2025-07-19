import api from './api';

export const getAutores = () => {
    return api.get('/autores');
};

export const createAutor = (autor) => {
    return api.post('/autores', autor);
};