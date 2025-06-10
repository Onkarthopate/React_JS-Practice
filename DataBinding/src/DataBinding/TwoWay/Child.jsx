import React from 'react';

const Child = ({ onInputChange, onClick, data }) => {
    return (
        <div>
            <input type="text" name="name" placeholder="Name" onChange={onInputChange} /> <br />
            <input type="email" name="email" placeholder="Email" onChange={onInputChange} /> <br />
            <input type="text" name="role" placeholder="Role" onChange={onInputChange} /><br />
            <button onClick={onClick}>Click for console data</button>

            <div>
                <table border={'solid 1px red'} >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.name || data.email || data.role ? (
                            <tr>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td>{data.role}</td>
                            </tr>
                        ) : (
                            <tr>
                                <td colSpan="3">Data Not Found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Child;
