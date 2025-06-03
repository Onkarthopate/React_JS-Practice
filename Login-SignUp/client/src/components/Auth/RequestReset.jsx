import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { requestReset } from '../../services/authService'; // Assuming you have this service

const RequestResetPage = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setError('');
        try {
            await requestReset({ email });
            setMessage('Password reset link sent to your email.');
            // Optionally navigate to a "check your email" page
            navigate('/reset-password');
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to request password reset');
        }
    };

    return (
        <div>
            <h2>Request Password Reset</h2>
            {message && <p style={{ color: 'green' }}>{message}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <button type="submit">Send Reset Link</button>
            </form>
        </div>
    );
};

export default RequestResetPage;