import API from '../services/api';

export const signUp = async (request) => {
    try {
        const response = await API.post("/signup", request);
        return response;
    } catch (error) {
        return error;
    }
}

export const signIn = async (request) => {
    try {
        const response = await API.post("/signin", request);
        return response;
    } catch (error) {
        return error;
    }
}