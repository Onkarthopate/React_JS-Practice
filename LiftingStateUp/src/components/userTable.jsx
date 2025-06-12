function UserTable({ data, handleDelete }) {
    return (
        <table border="1">
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {data.map((user, index) => (
                    <tr key={index}>
                        <td>{user.username}</td>
                        <td>
                            <button onClick={() => handleDelete(index)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default UserTable;
