import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './components/Auth/LoginPage';
import SignupPage from './components/Auth/SignupPage';
import RequestResetPage from './components/Auth/RequestReset';
import ResetPasswordPage from './components/Auth/ResetPassword';
import DashboardPage from './components/Pages/Dashboard';

// Simple check for authentication (you might use a context or state management)
const isAuthenticated = () => !!localStorage.getItem('authToken');

const PrivateRoute = ({ children }) => {
    return isAuthenticated() ? children : <Navigate to="/login" />;
};

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/request-reset" element={<RequestResetPage />} />
                <Route path="/reset-password" element={<ResetPasswordPage />} />
                <Route path="/dashboard" element={<PrivateRoute><DashboardPage /></PrivateRoute>} />
                <Route path="/" element={<Navigate to="/login" />} /> {/* Default route */}
            </Routes>
        </Router>
    );
}

export default App;