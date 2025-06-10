import React, {  useState } from 'react';
import Child from './Child';

const Parent = () => {
    const [data, setData] = useState({
        name: '',
        email: '', 
        role: '',
    });

    const handleClick = () => {
        console.log(data); // Log data on button click
    };

    const handleChange = (e) => {
        setData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value, // Ensure each input is correctly assigned
        }));
    };

    return (
        <div>
            <Child onClick={handleClick} onInputChange={handleChange} data = {data}/>
            {/* <p>Name: {data.name}</p>
            <p>Email: {data.email}</p>
            <p>Role: {data.role}</p> */}

            
        </div>
    );
};

export default Parent;
