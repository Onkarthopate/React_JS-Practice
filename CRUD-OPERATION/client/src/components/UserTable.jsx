import React from "react";

function UserTable({ users, handleEdit, handleDelete }) {
  return (
    <div>
      <h2>Users</h2>
      <table border="1px" cellPadding="8" >
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>DOB</th>
            <th>Gender</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan="6">No users found</td>
            </tr>
          ) : (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.dob}</td>
                <td>{user.gender}</td>
                <td>{user.role}</td>
                <td>
                  <button onClick={() => handleEdit(user)}>Edit</button>{" "}
                  <button onClick={() => handleDelete(user.id)}>Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
