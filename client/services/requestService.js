import axios from 'axios';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const getAllCompanyData = async (companyId) => {
    try {
        // const response = await axios.post(`${baseUrl}/company-info`, companyId);
        const response = await fetch('./dummyRequest.json');
        return response.json();
    } catch (error) {
        if (error.response && error.response.data && error.response.data.error) {
            throw new Error(error.response.data.error);
        } else {
            throw new Error('An unexpected error occurred');
        }
    }
} 

export default {
    getAllCompanyData
}