import axios from 'axios';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const login = async (userData) => {
    try {
        const response = await axios.post(`${baseUrl}/login`, userData);
        return response.data;
    } catch (error) {
        if (error.response && error.response.data && error.response.data.error) {
            throw new Error(error.response.data.error);
        } else {
            throw new Error('An unexpected error occurred');
        }
    }
}

export default {
    login
}