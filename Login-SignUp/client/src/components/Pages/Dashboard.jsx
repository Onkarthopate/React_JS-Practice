import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserTable from '../Dashboard/UserTable';

const DashboardPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const authToken = localStorage.getItem('authToken');
        if (!authToken) {
            alert('Please log in to view this page.');
            navigate('/login');
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        navigate('/login');
    };

    return (
        <div>
            <h2>Dashboard</h2>
            <UserTable />
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default DashboardPage;