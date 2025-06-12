import React, { useState } from 'react';

function UserForm({ addUser }) {
    const [username, setUsername] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username.trim()) {
            addUser({ username });
            setUsername('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                placeholder="Enter username"
            />
            <button type="submit">Add User</button>
        </form>
    );
}

export default UserForm;
