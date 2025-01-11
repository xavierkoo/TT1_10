import axios from 'axios';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const login = async (userData) => {
    try {
        const response = await axios.post(`${baseUrl}/login`, userData);
        console.log(response)
        const token = response.data.jwt
        if (token) {
            sessionStorage.setItem("authToken", token);
        }
        localStorage.clear()
        localStorage.setItem("name", response.data.companyName)
        localStorage.setItem("id", response.data.companyId)
        return response
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