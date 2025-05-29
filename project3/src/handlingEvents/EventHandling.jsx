import { useState } from "react";
import "./EventHandling.css"; // Import the external CSS file

function EventHandling() {
    const [data, setData] = useState({
        username: '',
        email: '',
        phone: '',
        password: ''
    });

    const [passwordError, setPasswordError] = useState("");
    const [emailError, setEmailError] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Submitted:", data);
        alert(
            `Submitted Data:\n
                Name: ${data.username}\n
                Email: ${data.email}\n
                Phone: ${data.phone}\n
                Password: ${data.password}`
                        );
    }

    function handleChange(e) {
        const { name, value } = e.target;

        setData(prevData => ({
            ...prevData,
            [name]: value
        }));

        setPasswordError("");
    }

    const validatePassword = () => {
        const val = data.password;
        const pattern =
            /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])(?=.*\d).{8,}$/;

        if (!pattern.test(val)) {
            setPasswordError(
                "Password must be at least 8 characters, include at least one uppercase letter, one special character, and one number."
            );
        } else {
            setPasswordError("");
        }
    };

    const validateEmail = () => {
        const email = data.email;
        let error = '';

        if (!email.includes('@')) {
            error = 'Must contain @ symbol.';
        } else if (/[A-Z]/.test(email)) {
            error = 'Email cannot contain uppercase letters.';
        }

        setEmailError(error);
    };


    return (
        <div className="container w-50 h-75">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Name:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={data.username}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        formNoValidate
                        required
                        value={data.email}
                        onChange={handleChange}
                        onBlur={validateEmail}
                    />
                    {emailError && (
                        <div className="error-message">{emailError}</div>
                    )}

                </div>
                <div>
                    <label htmlFor="phone">Mobile Number:</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        maxLength={10}
                        minLength={10}
                        required
                        value={data.phone}
                        onChange={(e) => {
                            const val = e.target.value;
                            if (/^\d{0,10}$/.test(val)) {
                                handleChange(e);
                            }
                        }}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        minLength={8}
                        required
                        value={data.password}
                        onChange={handleChange}
                        onBlur={validatePassword}
                    />
                    {passwordError && (
                        <div className="error-message">{passwordError}</div>
                    )}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default EventHandling;
