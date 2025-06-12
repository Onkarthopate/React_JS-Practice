import { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function UserForm() {
    const [data, setData] = useState({
        username: '',
        email: '',
        password: '',
        mobile: '',
    });

    const [errors, setErrors] = useState({});


    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    const validate = () => {

        let newErrors = {};

        const usernameRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{3,}$/;
        const emailRegex = /^(?!_)(?!\d)([a-z\d._%+-]+)@((?!.*([a-z])\3{2,})[a-z\d-]+)\.(com|github|microsoft|outlook)$/gi;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{8,}$/;
        const mobileRegex = /^[6-9]\d{9}$/;

        if (!data.username.trim()) {
            newErrors.username = "Username is required";
        } else if (!usernameRegex.test(data.username)) {
            newErrors.username = "Username must contain 1 uppercase digit & special character";
        }

        if (!data.password.trim()) {
            newErrors.password = "Password is required";
        } else if (!passwordRegex.test(data.password)) {
            newErrors.password = "Password must conatin1 uppercase letter ,digit and special letter"
        }

        if (!data.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!emailRegex.test(data.email)) {
            newErrors.email = "Email must contain @ symbol"
        }

        if (!data.mobile.trim()) {
            newErrors.mobile = "Mobile number required";
        } else if (!mobileRegex.test(data.mobile)) {
            newErrors.mobile = "mobile number contain only 10 digit not include country code"
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;


    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log("Form submitted!", data);
            toast.success("Form submitted successfully!", {
                position: "top-right",
                autoClose: 1900,
            });
            setData({ username: '', email: '', password: '', mobile: '' });
            setErrors({});
        }



    };

    return (
        <div className="container mt-5  d-flex justify-content-center w-100 "  >
            <form noValidate onSubmit={handleSubmit} className="w-50">
                <h2 className="text-center mb-4">User Registration</h2>

                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" name="username" id="username" placeholder="Username"
                        className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                        value={data.username} onChange={handleChange} />
                    {errors.username && <div className="invalid-feedback">{errors.username}</div>}

                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" name="email" id="email" placeholder="Your email"
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        value={data.email} onChange={handleChange} />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}


                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" name="password" id="password" placeholder="Your password"
                        className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                        value={data.password} onChange={handleChange} />
                    {errors.password && <div className="invalid-feedback">{errors.password}</div>}


                </div>

                <div className="mb-4">
                    <label htmlFor="mobile" className="form-label">Mobile No</label>
                    <input type="tel" name="mobile" id="mobile" placeholder="Mobile number"
                        className={`form-control ${errors.mobile ? 'is-invalid' : ''}`}
                        value={data.mobile} onChange={handleChange} />
                    {errors.mobile && <div className="invalid-feedback">{errors.mobile}</div>}

                </div>

                <button type="submit" className="btn btn-primary w-100">Submit</button>
                <ToastContainer />

            </form>
        </div>
    );
}

export default UserForm;
