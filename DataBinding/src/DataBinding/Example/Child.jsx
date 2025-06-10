import React from 'react';

const Child = ({ onInputChange, onClick, data, inputValues }) => {
    return (
        <div>
            <input type="text" name="name" placeholder="Name" value={inputValues.name} onChange={onInputChange} /> <br />
            <input type="email" name="email" placeholder="Email" value={inputValues.email} onChange={onInputChange} /> <br />
            <input type="text" name="role" placeholder="Role" value={inputValues.role} onChange={onInputChange} /><br />
            <button onClick={onClick}>Submit</button>

            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.length > 0 ? (
                            data.map((user, index) => (
                                <tr key={index}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3">No Data Submitted</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Child;
