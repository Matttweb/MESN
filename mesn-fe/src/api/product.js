import API from '../services/api';

export const getProducts = async () => {
    try {
        const response = await API.get("/products");
        return response;
    } catch (error) {
        return error;
    }
};

export const createProduct = async (request) => {
    try {
        const response = await API.post("/products", request);
        return response;
    } catch (error) {
        return error;
    }
};

export const readProduct = async (id) => {
    try {
        const response = await API.get(`/products/${id}`);
        return response;
    } catch (error) {
        return error;
    }
};

export const updateProduct = async(id, request) => {
    try {
        const response = await API.put(`/products/${id}`, request);
        return response;
    } catch (error) {
        return error;
    }
};

export const deleteProduct = async (id) => {
    try {
        const response = await API.delete(`/products/${id}`);
        return response;
    } catch (error) {
        return error;
    }
}