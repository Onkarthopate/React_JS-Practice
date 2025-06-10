import React, { useState } from 'react';
import Child from './Child';

const Parent = () => {
    const [data, setData] = useState({
        name: '',
        email: '',
        role: '',
    });

    const [submittedData, setSubmittedData] = useState([]); // Store submitted records

    const handleClick = () => {
        if (data.name && data.email && data.role) {
            setSubmittedData([...submittedData, data]); // Add new entry
            setData({ name: '', email: '', role: '' }); // Reset input fields
        }
    };

    const handleChange = (e) => {
        setData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <div>
            <Child onClick={handleClick} onInputChange={handleChange} data={submittedData} inputValues={data} />
        </div>
    );
};

export default Parent;
