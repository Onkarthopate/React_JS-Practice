import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api'; // Adjust if your API base URL is different

export const signup = async (userData) => {
    return await axios.post(`${API_BASE_URL}/signUp`, userData);
};

export const login = async (credentials) => {
    return await axios.post(`${API_BASE_URL}/login`, credentials);
};

export const requestReset = async (emailData) => {
    return await axios.post(`${API_BASE_URL}/requestReset`, emailData);
};

export const resetPassword = async (resetData) => {
    return await axios.post(`${API_BASE_URL}/resetPassword`, resetData);
};

