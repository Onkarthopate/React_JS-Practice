import React, { useState, useEffect } from 'react';
import  userService  from '../../services/userServices'; // Assuming you have this service

const UserTable = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await userService.getAllUsers();
                setUsers(response.data.users);
            } catch (err) {
                setError('Failed to load users.');
                console.error('Error fetching users:', err);
            }
        };

        fetchUsers();
    }, []);

    if (error) {
        return <p style={{ color: 'red' }}>{error}</p>;
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Mobile No</th>
                    <th>DOB</th>
                    <th>Role</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <tr key={user._id || user.id}>
                        <td>{user._id || user.id}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.mobile}</td>
                        <td>{user.dob}</td>
                        <td>{user.role}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default UserTable;