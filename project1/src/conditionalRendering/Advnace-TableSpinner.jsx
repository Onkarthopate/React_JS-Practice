import React, { useEffect, useState } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function OneExample() {
  const [users, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setTimeout(async () => {
      try {
        const response = await axios('https://jsonplaceholder.typicode.com/users');
        setUser(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log("Error:", error.message);
      }
    }, 2000);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h2>User Information</h2>
      <br />

      <Table hover striped variant="success" bordered>
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
          {isLoading
            ? [...Array(10)].map((_, index) => (
                <tr key={index}>
                  <td><Skeleton width={20} /></td>
                  <td><Skeleton width={100} /></td>
                  <td><Skeleton width={150} /></td>
                  <td><Skeleton width={120} /></td>
                  <td><Skeleton width={80} /></td>
                  <td><Skeleton width={100} /></td>
                </tr>
              ))
            : users.map((user, index) => (
                <tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.address.city}</td>
                  <td>{user.website}</td>
                </tr>
              ))}
        </tbody>
      </Table>
    </>
  );
}

export default OneExample;
