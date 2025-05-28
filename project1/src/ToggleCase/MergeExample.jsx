import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import './Merged.css';

function MergeExample() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Fetch user data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
      } catch (error) {
        console.log('Error:', error.message);
      } finally {
        // simulate 2s delay for loading skeletons
        setTimeout(() => setIsLoading(false), 2000);
      }
    };

    fetchData();
  }, []);

  // Handle dark mode toggle
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Apply dark/light theme class to body
  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  return (
    <div className="app-container">
      {/* Dark/light mode toggle button */}
      <div style={{ textAlign: 'right' }}>
        <button
          onClick={toggleDarkMode}
          style={{
            fontSize: '24px',
            cursor: 'pointer',
            border: '1px solid gray',
            background: 'transparent',
            color: isDarkMode ? 'white' : 'black', // this sets the color for icons within the button
          }}
        >
          {isDarkMode ? (
            <i className="bi bi-sun"></i>
          ) : (
            <i className="bi bi-moon-stars-fill"></i>
          )}
        </button>
      </div>


      <h2 style={{ textAlign: 'center' }}>User Information</h2>
      <br />

      <Table hover striped bordered variant={isDarkMode ? 'dark' : 'light'}>
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
            : users.map((user) => (
              <tr key={user.id}>
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
    </div>
  );
}

export default MergeExample;
