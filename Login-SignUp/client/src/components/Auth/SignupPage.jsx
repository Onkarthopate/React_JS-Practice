import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signup } from '../../services/authService'; // Assuming you have this service

const SignupPage = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        mobile: '',
        dob: '',
        password: '',
        role: '',
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await signup(formData);
            navigate('/login'); // Redirect to login after successful signup
        } catch (err) {
            setError(err.response?.data?.message || 'Signup failed');
        }
    };

    return (
        <div>
            <h2>Sign Up</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="mobile">Mobile:</label>
                    <input type="tel" id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="dob">Date of Birth:</label>
                    <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="role">Role:</label>
                    <input type="text" id="role" name="role" value={formData.role} onChange={handleChange} />
                </div>
                <button type="submit">Sign Up</button>
            </form>
            <p>Already have an account? <Link to="/login">Log in</Link></p>
        </div>
    );
};

export default SignupPage;