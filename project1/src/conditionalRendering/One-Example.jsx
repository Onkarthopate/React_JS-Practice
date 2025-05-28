import React, { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Spinner from 'react-bootstrap/Spinner';


function OneExample() {
    const [users, setUser] = useState([]);

    const fetchData = () => {

        setTimeout(async () => {
            try {
                const responce = await axios('https://jsonplaceholder.typicode.com/users');
                setUser(responce.data);

            } catch (error) {
                console.log("Error :", error.message);
            }
        }, 2000);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <>
            <h2>User Information</h2>
            <br />
            {users.length === 0 ? <Spinner animation="border" role="status" className="text-primary">
                <span className="visually-hidden">Loading...</span>
            </Spinner> : (
                <Table hover striped variant="success" bordered >
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>Website</th>
                        </tr>
                    </thead>

                    <tbody>
                        {users.map((users, index) => (
                            <tr key={index}>
                                <td>{users.id}</td>
                                <td>{users.name}</td>
                                <td>{users.email}</td>
                                <td>{users.phone}</td>
                                <td>{users.address.city}</td>
                                <td>{users.website}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </>
    );
}

export default OneExample;