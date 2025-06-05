import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = ({ setIsLogin }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        role: "",
    });

    const [errors, setErrors] = useState({
        fullName: "",
        email: "",
        password: "",
        role: "",
    });

    const nameRegex = /^[A-Za-z\s]{3,}$/;
    const emailRegex = /^[a-z]{3,}[a-z0-9._%+-]*@(gmail\.com|microsoft\.com|github\.com)$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        setErrors((prev) => ({
            ...prev,
            fullName: name === "fullName" ? (nameRegex.test(value) ? "" : "Full Name must be at least 3 letters.") : prev.fullName,
            email: name === "email" ? (emailRegex.test(value) ? "" : "Invalid email format.") : prev.email,
            password: name === "password" ? (passwordRegex.test(value) ? "" : "Password must be 8+ chars, include 1 uppercase, 1 number, and 1 special symbol.") : prev.password,
            role: name === "role" ? (value ? "" : "Role selection is required.") : prev.role,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (Object.values(errors).some((error) => error) || Object.values(formData).some((value) => !value)) {
            alert("Please fix validation errors before submitting.");
            return;
        }

        console.log("User Registered:", formData);
        localStorage.setItem("userData", JSON.stringify(formData)); // Store user data
            localStorage.setItem("userRole", formData.role); // Store role separately
        alert("Signup successful! Redirecting to login...");

        setTimeout(() => {
            setIsLogin(true);
            navigate("/login");
        }, 500);
    };

    return (
        <div className="auth-face auth-signup p-4">
            <h2 className="mb-4">Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="fullName" placeholder="Full Name" className="form-control mb-4"
                    value={formData.fullName} onChange={handleChange} required />
                {errors.fullName && <p className="text-danger mb-2">{errors.fullName}</p>}

                <input type="email" name="email" placeholder="Email" className="form-control mb-4"
                    value={formData.email} onChange={handleChange} required />
                {errors.email && <p className="text-danger mb-2">{errors.email}</p>}

                <input type="password" name="password" placeholder="Password" className="form-control mb-4"
                    value={formData.password} onChange={handleChange} required />
                {errors.password && <p className="text-danger mb-2">{errors.password}</p>}

                <select name="role" className="form-control mb-2" value={formData.role} onChange={handleChange} required>
                    <option value="">Select Role</option>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                </select>
                {errors.role && <p className="text-danger mb-2">{errors.role}</p>}

                <button type="submit" className="btn btn-success w-100 mb-4">Sign Up</button>
            </form>
            <p className="switch-text text-decoration-underline" onClick={() => setIsLogin(true)}>
                Already have an account? Login
            </p>
        </div>
    );
};

export default Signup;
