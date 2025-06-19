import React, { Suspense, useState } from "react";
import UserForm from './UserForm';
import UserTable from './/UserTable';


// const UserForm =React.lazy(()=>import('./UserForm'));
// const UserTable = React.lazy(()=>import('./UserTable'))



function UserLogic() {
    const [data, setData] = useState({
        username: "",
        email: "",
        date: "",
        role: "select",
        gender: ""
    });

    const [users, setUsers] = useState([]);
    const [edit, setEdit] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({
            ...prev,
            [name]: value
        }));

    };


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", data);

        if (edit !== null) {
            const updatedUsers = [...users];
            updatedUsers[edit] = data;
            setUsers(updatedUsers);
            setEdit(null);
        } else {
            setUsers([...users, data]);
        }
        setData({
            username: "",
            email: "",
            date: "",
            role: "select",
            gender: ""
        });
    };

    const handleEdit = (index) => {
        setData(users[index]);
        setEdit(index);
    }

    const handleDelete = (index) => {
        const filterdData = users.filter((_, i) => i !== index);
        console.log(filterdData);
        setUsers(filterdData);


    }

    return (
        <div>
            {/* <Suspense fallback={<div>Loading</div>}>
                <UserForm
                    data={data}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                />
                <br />
                <UserTable data={users} handleDelete={handleDelete} handleEdit={handleEdit} edit={edit} />
            </Suspense> */}

             <UserForm
                    data={data}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                />
                <br />
                <UserTable data={users} handleDelete={handleDelete} handleEdit={handleEdit} edit={edit} />

        </div>


    );
}

export default UserLogic;
