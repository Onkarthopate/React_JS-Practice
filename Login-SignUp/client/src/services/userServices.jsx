import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api'; 

const getAuthToken = () => localStorage.getItem('authToken');

// Helper function to create headers with the token
const authHeader = () => ({
    headers: {
        Authorization: `Bearer ${getAuthToken()}`,
    },
});

export const userService = {
    getAllUsers: async () => {
        return await axios.get(`${API_BASE_URL}/users`, authHeader());
    },
};