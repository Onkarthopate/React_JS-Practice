import { useState } from "react";
import UserForm from "./UserForm";
import UserTable from "./UserTable";

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
            <UserForm
                data={data}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
            <br />
            <UserTable data={users} handleDelete={handleDelete} handleEdit={handleEdit} edit = {edit} />
        </div>


    );
}

export default UserLogic;
