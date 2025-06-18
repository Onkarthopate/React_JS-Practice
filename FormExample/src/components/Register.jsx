import React from "react";
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/registerForm.css'; // Custom styles
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function RegisterForm() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log('data', data);

        const existingUser = JSON.parse(localStorage.getItem('users')) || [];

        const userExists = existingUser.some(user => user.email === data.email);

        if (userExists) {
            toast.error('User exists with this email');
            return;
        }

        existingUser.push(data);
        localStorage.setItem('users', JSON.stringify(existingUser));
        toast.success("Registered successfully!");
        
        setTimeout(() => {
            navigate('/login');
        }, 1500);
    };


    return (
        <div className="register-container">
            <div className="form-card">
                <h2 className="form-title">Register</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="register-form">

                    {/* Name */}
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            {...register("name", {
                                required: "Name is required",
                                pattern: {
                                    value: /^[A-Za-z\s]+$/,
                                    message: "Only letters and spaces allowed"
                                }
                            })}
                        />
                        {errors.name && <p className="error-msg">{errors.name.message}</p>}
                    </div>

                    {/* Email */}
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[A-Za-z]{2,}[A-Za-z0-9._%+-]*@(gmail|outlook|microsoft|github)\.com$/,
                                    message: "Must be a valid supported email"
                                }
                            })}
                        />
                        {errors.email && <p className="error-msg">{errors.email.message}</p>}
                    </div>

                    {/* Password */}
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            autoComplete="current-password"
                            {...register("password", {
                                required: "Password is required",
                                pattern: {
                                    value: /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
                                    message: "At least 8 digit , with 1 uppercase, 1 number, 1 special character",
                                }
                            })}
                        />
                        {errors.password && <p className="error-msg">{errors.password.message}</p>}
                    </div>

                    {/* Role */}
                    <div className="form-group">
                        <label>Role</label>
                        <select {...register("role", { required: "Please select a role" })}>
                            <option value="">Select Role</option>
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
                        {errors.role && <p className="error-msg">{errors.role.message}</p>}
                    </div>

                    <button type="submit" className="submit-btn">Register</button>
                    <p className="auth-switch m-3">
                        Already have an account?{" "}
                        <span className="login-link" onClick={() => navigate("/login")}>
                            <Link>Login</Link>
                        </span>
                    </p>

                </form>
            </div>
            <ToastContainer />
        </div>
    );
}

export default RegisterForm;
