import { useState } from "react";
import Signup from "./SignUp";
import "./Auth.css";

function LoginPage() {
   const [isLogin, setIsLogin] = useState(true);
   const [formData, setFormData] = useState({ email: "", password: "" });
   const [emailError, setEmailError] = useState("");
   const [passwordError, setPasswordError] = useState("");

   const emailRegex = /^[a-z]{3,}[a-z0-9._%+-]*@(gmail\.com|microsoft\.com|github\.com)$/;
   const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });

      if (name === "email") {
         setEmailError(emailRegex.test(value) ? "" : "Invalid email format");
      }

      if (name === "password") {
         setPasswordError(passwordRegex.test(value) ? "" : "Password must contain at least 8 characters, 1 uppercase letter, special symbol");
      }
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      const storedUser = JSON.parse(localStorage.getItem("userData"));

      if (!storedUser || storedUser.email !== formData.email || storedUser.password !== formData.password) {
         alert("Invalid credentials! Please check your email and password.");
         return;
      }

      console.log("User logged in:", formData);
      localStorage.setItem("isLoggedIn", true); // Store login state
   };


   return (
      <div className="auth-container m-5">
         <div className={`auth-card ${isLogin ? "" : "flip"}`}>

            {isLogin ? (
               <div className="auth-face auth-login p-4">
                  <h2 className="mb-4">Login</h2>
                  <form onSubmit={handleSubmit}>
                     <input type="email" name="email" placeholder="Email" className="form-control mb-4"
                        value={formData.email} onChange={handleChange} required />
                     {emailError && <p className="text-danger mb-4">{emailError}</p>}

                     <input type="password" name="password" placeholder="Password" className="form-control mb-4"
                        value={formData.password} onChange={handleChange} required />
                     {passwordError && <p className="text-danger mb-2">{passwordError}</p>}

                     <button type="submit" className="btn btn-primary w-100 mb-4">Login</button>
                  </form>
                  <p className="switch-text text-decoration-underline" onClick={() => setIsLogin(false)}>
                     Don't have an account? Sign Up
                  </p>
               </div>
            ) : (
               <Signup setIsLogin={setIsLogin} />
            )}

         </div>
      </div>
   );
}

export default LoginPage;
