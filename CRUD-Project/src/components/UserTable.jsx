function UserTable({ data, handleDelete, handleEdit }) {
    return (
        <div>

            <table className="table table-bordered" >
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Email</th>
                        <th>DOB</th>
                        <th>Role</th>
                        <th>Gender</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>

                    {data.length > 0 ? (
                        data.map((user, index) => (
                            <tr key={index}>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.date}</td>
                                <td>{user.role}</td>
                                <td>{user.gender}</td>
                                <td><button onClick={()=>handleEdit(index)}><i className="fas fa-edit"></i></button></td>
                                <td><button onClick={()=>handleDelete(index)}><i className="fa-solid fa-trash"></i></button></td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7" className="text-center">No Data Found</td>
                        </tr>)
                    }
                </tbody>

            </table>
        </div>
    );
}

export default UserTable;