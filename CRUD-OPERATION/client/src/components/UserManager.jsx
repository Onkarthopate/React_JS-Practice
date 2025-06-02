import React, { useState, useEffect } from "react";
import "./UserForm.css";
import "./UserTable.css";
import UserForm from "./UserForm";
import UserTable from "./UserTable";

function UserManager() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dob: "",
    gender: "",
    role: "",
    infoCorrect: false,
  });

  const [users, setUsers] = useState([]);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    fetch("http://localhost:8080/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error(err));

  };



  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.infoCorrect) {
      alert("Please confirm that all info is correct!");
      return;
    }

    const method = editId ? "PUT" : "POST";
    const url = editId
      ? `http://localhost:8080/users/${editId}`
      : "http://localhost:8080/users";

    fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        dob: formData.dob,
        gender: formData.gender,
        role: formData.role,
      }),
    })
      .then(async (res) => {
        if (!res.ok) {
          const data = await res.json();
          throw new Error(data.message || "Error occurred! User already exists");
        }
        return ;
      })
      .then(() => {
        alert(editId ? "User updated!" : "User created!");
        handleReset();
        fetchUsers();
      })
      .catch((err) => {
        console.error(err);
        alert("Error occurred!");
      });
  };

  const handleEdit = (user) => {
    setFormData({
      name: user.name,
      email: user.email,
      dob: user.dob,
      gender: user.gender,
      role: user.role,
      infoCorrect: true,
    });
    setEditId(user.id);
  };

  const handleDelete = (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;

    fetch(`http://localhost:8080/users/${id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then(() => {
        alert("User deleted!");
        fetchUsers();
      })
      .catch((err) => {
        console.error(err);
        alert("Error deleting user!");
      });
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      dob: "",
      gender: "",
      role: "",
      infoCorrect: false,
    });
    setEditId(null);
  };

  return (
    <div className="main-container">
      <UserForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleReset={handleReset}
        editId={editId}
      />
      <hr />
      <UserTable users={users} handleEdit={handleEdit} handleDelete={handleDelete} />
    </div>
  );
}

export default UserManager;
