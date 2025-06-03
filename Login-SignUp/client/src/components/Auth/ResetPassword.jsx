import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import  resetPassword from '../../services/authServices'; // Assuming you have this service

const ResetPasswordPage = () => {
    const [searchParams] = useSearchParams();
    const otp = searchParams.get('otp'); // You might pass OTP in the URL
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setError('');
        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }
        try {
            await resetPassword({ otp, newPassword: password });
            setMessage('Password reset successfully. Redirecting to login...');
            setTimeout(() => {
                navigate('/login');
            }, 2000);
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to reset password');
        }
    };

    return (
        <div>
            <h2>Reset Password</h2>
            {message && <p style={{ color: 'green' }}>{message}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                {otp && <input type="hidden" name="otp" value={otp} readOnly />}
                <div>
                    <label htmlFor="password">New Password:</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm New Password:</label>
                    <input type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                </div>
                <button type="submit">Reset Password</button>
            </form>
        </div>
    );
};

export default ResetPasswordPage;