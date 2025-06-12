import React, { useState } from 'react';
import UserForm from './components/userForm';
import UserTable from './components/userTable';

function App() {
    const [users, setUsers] = useState([]);

    const addUser = (user) => {
        setUsers([...users, user]);
    };

    const deleteUser = (index) => {
        setUsers(users.filter((_, i) => i !== index));
    };

    return (
        <div>
            <h2>User Management</h2>
            <UserForm addUser={addUser} />
            <UserTable data={users} handleDelete={deleteUser} />
        </div>
    );
}

export default App;
